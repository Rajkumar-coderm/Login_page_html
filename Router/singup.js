const express=require('express');
const bodyParser=require('body-parser');
const encoder=bodyParser.urlencoded();
const connection=require('../databases/db')
const app=express.Router();


app.post('/signup',encoder,function(req,res){
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    connection.query('select * from users where email = ?',[email],function(error,results,fields){
    if(results.length<1){
        let query = `INSERT INTO users 
        (name, email,password) VALUES (?, ?, ?);`;
        connection.query(query,[name,email,password],function(error,results,fields){
            if (error) {
                throw error;
            }else{
                res.redirect('/signup')
            }
        })
    }else{
        res.redirect('/login')
    }

    })
});


module.exports=app;
