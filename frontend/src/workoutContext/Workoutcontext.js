import {  createContext, useReducer } from "react";

export const WorkoutContex = createContext()

export const workoutReducer = (state,action)=>{
    switch(action.type){
        case 'SET_WORKOUT':
            return {
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
            }
        default :
        return state
    }
}

export const WorkoutContexProvider =({children})=>{

    const [state,dispatch] = useReducer(workoutReducer,{
        workouts:null
    })
    return(
        <WorkoutContex.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContex.Provider>
    )
}