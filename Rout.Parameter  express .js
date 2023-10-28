const express = require("express");

const app = express();

app.get ("/",(req,res)=>{
       res.send("hello from homesite");
});

app.get("/profile/:username",(req,res)=>{
       res.send(`hello ${req.params.username} ji`);
});

app.listen(4000,()=>{
       console.log("start");
});