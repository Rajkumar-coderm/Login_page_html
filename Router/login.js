const express=require('express');
const mysql=require('mysql')
const jwt=require('jsonwebtoken')
const bodyParser=require('body-parser');
const encoder=bodyParser.urlencoded();
const connection=require('../databases/db')
const app=express.Router();
app.use(express.json())

app.post("/login",encoder, function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    connection.query('select * from users where email = ? and password = ?',[email,password],function(error,results,fields){
        console.log(results);
        if (results.length > 0) {
            const token=jwt.sign({name:req.body.name,email:req.body.email},"Rajkumar")
            console.log(token);
            res.cookie("token",token).redirect("/index");
        } else {
            res.redirect('/signup')
        }
        res.end();
    })
})

module.exports=app;