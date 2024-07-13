// importing express 
var express =require('express');

//initialization
var app = express();

//middleware


//api
// app.get('url',(req,res)=>{})
app.get('/',(req,res) =>{
    res.send("Hello world!!")
});
app.get('/login',(req,res)=>{
    res.send("Athira")
});




//port assigning
app.listen(3000,(req,res)=>{
    console.log("port is up and running")
})