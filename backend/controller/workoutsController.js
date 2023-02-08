const  mongoose = require('mongoose');
const Workout = require('../models/workoutsModel')

//Get all the workouts
const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})

    if(!workouts){
     return res.status(404).json({mssg:"No Workouts Available"});
    }
    res.status(200).json(workouts);

}

//Get a single workout
const getWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({mssg:"No Such a Workout"});
    }

    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({mssg:"No Workouts Available"});
       }
    res.status(200).json(workout);

}

//Post a new workouts

const createWorkout = async (req,res)=>{
    const {title,load, reps} = req.body;

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length>0){
        return res.status(400).json({error:'Please Fill All Fields',emptyFields})
    }
    
    try{
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout);

    }
    catch{(error)=>{
        res.json({error:error.message})
    }}
    
}

//Delete a workouts
const deleteWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({mssg:"No Such a Workout"});
    }

    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({mssg:"No Workouts Available"});
       }
    res.status(200).json(workout);
}

//Update a new workouts
const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({mssg:"No Such a Workout"});
    }
    const workout = await Workout.findByIdAndUpdate({_id:id},{...req.body})

    if(!workout){
        return res.status(404).json({mssg:"No Workouts Available"});
       }

    res.status(200).json(workout);

}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}