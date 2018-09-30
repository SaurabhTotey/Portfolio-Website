package com.saurabhtotey.portfoliowebsite.data

import java.util.*
import java.util.Calendar.HOUR

//The time of when the languageUsageAmount was last updated
private val lastUpdated = GregorianCalendar(0, 0, 0)

//A hashmap of language name to number of bytes written in that language
val languageUsageAmount = mutableMapOf<String, Int>()
    get() {
        if (GregorianCalendar().after((lastUpdated.clone() as GregorianCalendar).also { it.add(HOUR, 1) })) {
            //TODO: update languageUsageAmount using gitHubKey
        }
        return field
    }