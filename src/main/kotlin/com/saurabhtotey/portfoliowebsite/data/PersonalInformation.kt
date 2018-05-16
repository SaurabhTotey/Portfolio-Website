package com.saurabhtotey.portfoliowebsite.data

import com.google.gson.Gson
import org.springframework.core.io.ClassPathResource

/**
 * A class that stores all of my personal information
 * While some fields realistically aren't going to get used (eg. names), it is still useful to have them stored in such a format
 * This is useful because it keeps all the information in one place or object
 */
data class PersonalInformation(val firstName: String, val middleName: String, val lastName: String, val birthday: String, val address: String, val phone: String, val email: String)

//Gets the JSON data and decodes it to a PersonalInformation object
val personalInformationJson = ClassPathResource("config/personalInformation.json").file.inputStream().bufferedReader().use { it.readText() }
val personalInformation = Gson().fromJson(personalInformationJson, PersonalInformation::class.java)