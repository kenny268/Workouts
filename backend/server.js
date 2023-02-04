require('dotenv').config()
const express = require('express');
const workouts = require('./workouts/workouts');
const mongoose = require('mongoose')
// epress app
const app =express();

//midleware 
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
});

// routes
app.use('/api/',workouts);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Listerning on port 66 http://localhost:${process.env.PORT}`)
        })

    })
    .catch((err)=>{
        console.log(err)
    })


