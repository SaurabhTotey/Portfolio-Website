package com.saurabhtotey.portfoliowebsite.data

import com.google.gson.Gson
import org.springframework.core.io.ClassPathResource

/**
 * A structure for storing the entirety of my resume in object format
 */
data class Resume(val experience: Array<Employment>, val education: Array<Education>, val affiliations: Array<Affiliation>, val skills: Array<String>, val languages: Array<Language>, val volunteering: Array<Volunteering>, val awards: Array<Award>)

/**
 * A structure for storing information about employments
 */
data class Employment(val name: String, val objective: String, val role: String, val contributions: Array<String>, val location: String, val start: String, val end: String)

/**
 * A structure for storing information about grade point average
 */
data class GPA(val weighted: Double, val unweighted: Double)

/**
 * A structure for storing information about schooling
 */
data class Education(val institution: String, val degree: String, val location: String, val start: String, val end: String, val gpa: GPA)

/**
 * A structure for storing information about role in an affiliation
 */
data class Role(val title: String, val duration: Int)

/**
 * A structure for storing information about affiliations
 */
data class Affiliation(val name: String, val start: String, val end: String, val role: Role)

/**
 * A structure for storing information about language
 */
data class Language(val name: String, val proficiency: String)

/**
 * A structure for storing information about volunteerwork
 */
data class Volunteering(val name: String, val hours: Int, val start: String, val end: String)

/**
 * A structure for storing information about an honor/award
 */
data class Award(val description: String, val years: Array<String>)

//Gets the JSON data and decodes it to a Resume object
val qualificationsJson = ClassPathResource("config/qualifications.json").inputStream.bufferedReader().use { it.readText() }
val qualifications = Gson().fromJson(qualificationsJson, Resume::class.java)