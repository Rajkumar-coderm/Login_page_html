const mysql=require('mysql');
const express=require('express');
const app=express()
app.use(express.json())
app.use(express.static(__dirname+'/public'))


// redirect in file 
app.get('/home',function(req,res){
    res.sendFile('/home/rajkumar/Desktop/login_steam/public/login.html')
})

app.get('/index',function(req,res){
    res.sendFile('/home/rajkumar/Desktop/login_steam/public/index.html')
})

app.get('/signup',function(req,res){
    res.sendFile('/home/rajkumar/Desktop/login_steam/public/signup.html')
})

app.get('/login',function(req,res){
    res.sendFile('/home/rajkumar/Desktop/login_steam/public/login.html')
})

// moddlewear in file path
app.use('/',require('./Router/login'))
app.use('/',require('./Router/singup'))



app.listen(2021,()=>{
    console.log("server start at 2021");
})