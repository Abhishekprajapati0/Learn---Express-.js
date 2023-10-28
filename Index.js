const express = require("express");
const app = express();
const apidata = require("./Data.js")
const cors = require("cors");


app.get("/",(req,res)=>{
	res.send("Hello I am home page");
});

app.get("/student/data",(req,res)=>{
	res.json(apidata);

});

app.listen(4000,()=>{
	console.log("I am start :)");
});