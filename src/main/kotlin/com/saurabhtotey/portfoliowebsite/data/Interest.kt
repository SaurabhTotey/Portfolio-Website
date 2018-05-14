package com.saurabhtotey.portfoliowebsite.data

import com.google.gson.Gson
import org.springframework.core.io.ClassPathResource

/**
 * The class that represents an actual interest
 */
data class Interest(val name: String, val image: String, val description: String)

/**
 * The class that represents a category of interests
 * All members and fields were autogenerated
 */
data class InterestCategory(val category: String, val description: String, val items: Array<Interest>) {
    val id = category.split(" ").joinToString("")
}

//A variable of all the loaded interests from the config file as a list of InterestCategories
val interests: Array<InterestCategory> = Gson().fromJson(ClassPathResource("config/interests.json").file.inputStream().bufferedReader().use { it.readText() }, Array<InterestCategory>::class.java).map { e -> InterestCategory(e.category, e.description, e.items) }.toTypedArray()
