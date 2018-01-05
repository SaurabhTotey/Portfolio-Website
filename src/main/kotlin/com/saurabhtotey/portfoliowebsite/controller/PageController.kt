package com.saurabhtotey.portfoliowebsite.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping

@Controller
open class PageController {

    /**
     * Serves the Home page as the first page of the website; is the index
     */
    @RequestMapping("/")
    fun homePage(): String {
        return "Home"
    }

    /**
     * When the user tries to go the website/Home, they will get redirected to the home page at just /
     */
    @RequestMapping("/Home")
    fun redirectToHomePage(): String {
        return "redirect:"
    }

}