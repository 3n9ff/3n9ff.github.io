"use strict"

const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("index.html",{title : "Home page"});
});

router.get("/contact", (req,res)=>{
    res.render("contact.html",{title : "Contact page"});
});

router.get("/about", (req, res) => {
    res.render("about.html",{title:"About page"})
})

module.exports = router