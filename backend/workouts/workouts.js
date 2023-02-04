const express = require('express');
const router = express.Router();

const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout 
} = require('../controller/workoutsController')

//Get all the workouts
router.get('/',getWorkouts);

//Get a single workouts
router.get('/:id',getWorkout);

//Post a new workouts
router.post('/', createWorkout);

//Delete a workouts
router.delete('/:id',deleteWorkout);

//Update a new workouts
router.patch('/:id',updateWorkout);

module.exports=router