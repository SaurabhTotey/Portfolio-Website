package com.saurabhtotey.portfoliowebsite.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * The class that serves the page that displays all of my GitHub repositories
 * Handles pulling repositories from GitHub and sending them to template to make look pretty
 */
@Controller
class ProjectController {

    /**
     * Serves the programming page if asked for
     */
    @RequestMapping("/Programming")
    fun projectPage(): String {
        return "Programming"
    }

}