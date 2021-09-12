const mysql=require('mysql')
const connection=mysql.createConnection({
    host:"localhost",
    user:"root", 
    password:"Rajkumar@123",
    database:"Login"
});

connection.connect(function(error){
    if(error) throw error
    else console.log("connected");
})

module.exports=connection;