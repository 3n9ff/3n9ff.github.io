"use strict"

const express = require("express");
const path = require("path");
const app = express();

//settings
app.set("port",process.env.PORT || 5000);
app.engine("html", require("ejs").renderFile)
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

//staic files
app.use(express.static(path.resolve(__dirname,"public")))

//routes
app.use(require("./routes"))

//listening server
app.listen(app.get("port"),()=>{
    console.log("Server listening on "+app.get("port")+" ...")
});
