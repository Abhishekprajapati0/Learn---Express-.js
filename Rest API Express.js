const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send([
        {
            id:1,
        name:"Abhishek",
        age:18,
        city:"up"
    },

     {
            id:2,
        name:"  manoj",
        age:18,
        city:"ballia"
    },

     {
            id:3,
        name:"shima",
        age:18,
        city:"jharkhand"
    },

     {
            id:4,
        name:"munna",
        age:34,
        city:"up"
    },

     {
            id:5,
        name:"Ajit",
        age:56,
        city:"japan"
    },

     {
            id:6,
        name:"Arpit",
        age:18,
        city:"Mau"
    },

     {
            id:7,
        name:"Puja",
        age:23,
        city:"up"
    },

     {
            id:8,
        name:"Arushi",
        age:18,
        city:"up"
    },

     {
            id:9,
        name:"Shila",
        age:18,
        city:"canada"
    },

     {
            id:10,
        name:"Akshana",
        age:40,
        city:"America"
    },


        ])
});
app.listen(4000,()=>{
    console.log("start")

});