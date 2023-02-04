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