const express = require("express");
const app  = express();
const path = require("path");

app.get("/",(req,res)=>{
       res.send("hello from the home site");
});
app.get ("/abhishek",(req,res)=>{
       res.sendFile(__dirname + "/Portfolio.html")

});
app.listen(5000,()=>{
       console.log("server start ")
});

