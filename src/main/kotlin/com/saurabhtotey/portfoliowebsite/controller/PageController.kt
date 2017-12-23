package com.saurabhtotey.portfoliowebsite.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping

@Controller
open class PageController {

    @RequestMapping("/")
    fun homePage(model: Model): String {
        return "index"
    }

}