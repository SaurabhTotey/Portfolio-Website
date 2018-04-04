package com.saurabhtotey.portfoliowebsite.controller

import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * The class that serves all of the pages and handles filling out and sending web pages
 */
@Controller
open class PageController: ErrorController {

    /**
     * Serves the Home page as the first page of the website; is the index
     */
    @RequestMapping("/")
    fun homePage(): String {
        return "Home"
    }

    /**
     * Serves the Error page if asked for
     */
    @RequestMapping("/Error")
    fun errorPage(): String {
        return "Error"
    }

    /**
     * Gets the path of where this controller will handle errors
     */
    override fun getErrorPath(): String {
        return "/Error"
    }

    /**
     * When the user tries to go to /Home, they will get redirected to the home page at just /
     */
    @RequestMapping("/Home")
    fun redirectToHomePage(): String {
        return "redirect:"
    }

    /**
     * When the user tries to go to /error, they will get redirected to the error page at /Error
     */
    @RequestMapping("/error")
    fun redirectToErrorPage(): String {
        return "redirect:/Error"
    }

}