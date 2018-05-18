package com.saurabhtotey.portfoliowebsite.data

import org.springframework.core.io.ClassPathResource

//The env file; not necessarily guaranteed to exist
val envFile = ClassPathResource("config/.env")

/**
 * Gets the environment variable with the given key; will use env file if possible
 */
fun getEnvValue(key: String): String {
    return if (envFile.exists()) {
        val lines = envFile.inputStream.bufferedReader().use { it.readLines() }
        val line = lines.filter { it.startsWith(key) }[0]
        line.substring(key.length until line.length)
    } else {
        System.getenv(key)
    }
}

//The key that will be used to access GitHub's API and pull my personal data
val gitHubKey = getEnvValue("GitHubKey")
