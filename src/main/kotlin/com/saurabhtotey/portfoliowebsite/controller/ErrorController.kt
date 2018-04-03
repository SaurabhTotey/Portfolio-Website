package com.saurabhtotey.portfoliowebsite.controller

import org.springframework.boot.autoconfigure.web.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

const val path = "/Error" //The constant path where errors will be mapped to and displayed

/**
 * The class that handles mapping errors out to their respective needed pages
 */
@Controller
class ErrorController: ErrorController {

    /**
     * The path that this error controller maps to
     */
    override fun getErrorPath(): String {
        return path
    }

    /**
     * Returns an error page
     */
    @RequestMapping(path)
    fun errorPage(): String {
        return "Error"
    }

    /**
     * Redirects /error to /Error
     */
    @RequestMapping("/error")
    fun redirectToError(): String {
        return "redirect:/Error"
    }

}