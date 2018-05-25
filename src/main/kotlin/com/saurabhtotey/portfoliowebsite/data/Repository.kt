package com.saurabhtotey.portfoliowebsite.data

import java.util.*

/**
 * The class that represents a GitHub repository
 */
data class Repository(val name: String, val url: String, val homepage: String, val languages: Array<String>, val img: String = "")

/**
 * A singleton that represents all of the repository information
 */
object RepositoryInformation {

    //The last time the repository information was updated
    val lastUpdated = Date()
    lateinit var allRepositories: Array<Repository>
    lateinit var bestRepositories: Array<Repository>
    
}