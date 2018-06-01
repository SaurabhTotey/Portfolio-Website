package com.saurabhtotey.portfoliowebsite.controller

import com.saurabhtotey.portfoliowebsite.data.interestsJson
import com.saurabhtotey.portfoliowebsite.data.personalInformationJson
import com.saurabhtotey.portfoliowebsite.data.qualificationsJson
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

/**
 * An API controller that just gives all the information that is contained by this website
 * I don't know why anybody would want/use this, but I think this would be kinda cool to have
 */
@RestController
class API {

    /**
     * The method for getting interests
     */
    @RequestMapping(value = ["/api/interests"], method = [RequestMethod.GET])
    fun interests(): String {
        return interestsJson
    }

    /**
     * The method for getting personal information
     */
    @RequestMapping(value = ["/api/info"], method = [RequestMethod.GET])
    fun info(): String {
        return personalInformationJson
    }

    /**
     * The method for getting my resume
     */
    @RequestMapping(value = ["/api/qualifications"], method = [RequestMethod.GET])
    fun qualifications(): String {
        return qualificationsJson
    }

}