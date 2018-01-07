package com.saurabhtotey.portfoliowebsite.controller

import com.google.gson.Gson
import com.google.gson.JsonDeserializer
import com.google.gson.reflect.TypeToken
import okhttp3.OkHttpClient
import okhttp3.Request
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import java.util.*

@Controller
class ProjectController {

    data class Repository(val name: String, val description: String, val url: String)

    init {
        //Defines how to deserialize json into Repository object
        JsonDeserializer<Repository> { json, _, _ ->
            val jsonObject = json.asJsonObject
            Repository(jsonObject.get("name").asString, jsonObject.get("description").asString, jsonObject.get("html_url").asString)
        }
    }

    /**
     * When the user tries to see my projects, the GitHub API will be called and get all my projects and then fill out the
     * Page template with the found repositories
     */
    @RequestMapping("/Projects")
    fun projectPage(template: Model): String {
        val githubOathToken = System.getenv("GithubOathToken")

        //Actually calls the GitHub API and stores the response as a string
        val client = OkHttpClient()
        val repoRequest = Request.Builder()
                .url("https://api.github.com/user/repos?access_token=$githubOathToken&sort=pushed&affiliation=owner%2Ccollaborator")
                .get()
                .addHeader("user-agent", "SaurabhTotey")
                .build()
        //Converts the JSON format of all the repositories into something more easily handled
        val allRepos: Array<Repository> = Gson().fromJson(client.newCall(repoRequest).execute().body()!!.string(), object : TypeToken<Array<Repository>>() {}.type)

        val languages = HashMap<String, Int>()
        //Iterates through all found repositories and calls the GitHub API to find what language and to what extent each language was used in that repo
        allRepos.map {
            Request.Builder()
                    .url("https://api.github.com/repos/SaurabhTotey/${it.name}/languages?access_token=$githubOathToken")
                    .get()
                    .addHeader("user-agent", "SaurabhTotey")
                    .build()
        }.forEach {
            for ((language, amount) in Gson().fromJson<HashMap<String, Int>>(client.newCall(it).execute().body()!!.string(), object : TypeToken<HashMap<String, Int>>() {}.type)) {
                languages[language] = if (languages.containsKey(language)) {
                    languages[language]!! + amount
                } else {
                    amount
                }
            }
        }

        //Sends extracted information to the Projects page model to then make the page and stylize these accordingly
        template.addAttribute("repos", allRepos)
        template.addAttribute("languages", languages.toSortedMap())
        return "Projects"
    }

}