package com.saurabhtotey.portfoliowebsite.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * A class that controls the website's game
 */
@Controller
class GameController {

    /**
     * Gets the page for games when requested
     */
    @RequestMapping("/Fun")
    fun getGamePage(): String {
        return "Fun"
    }

}