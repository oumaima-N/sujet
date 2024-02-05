const express = require('express')
const mongoose =require('mongoose')
const user = require('./Models/user');

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017')



//test le server

app.get('/user',(req,res) => {
    const User =new user({
       name: 'ahmed',
       lastName: 'sadda'

    });
    User.save()
        .then((result) =>{
            res.send(result)
        })
        .catch((err) =>{
            console.log(err);
        });
   
});

app.listen(3002, ()=>{
    console.log("Server is Running")
})



