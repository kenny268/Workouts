const express = require('express');

const router = express.Router();

//Get all the workouts
router.get('/',(req,res)=>{
    res.json({mssg:"Get All workouts"})
});

//Get a single workouts
router.get('/:id',(req,res)=>{
    res.json({mssg:"Get a single workouts"})
});

//Post a new workouts
router.post('/',(req,res)=>{
    res.json({mssg:"Post a new workouts"})
});

//Delete a workouts
router.delete('/:id',(req,res)=>{
    res.json({mssg:"Delete a workouts"})
});

//Update a new workouts
router.patch('/:id',(req,res)=>{
    res.json({mssg:"Get Update a workouts"})
});

module.exports=router