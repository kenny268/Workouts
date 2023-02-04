import { useContext } from "react"
import { WorkoutContex } from "../workoutContext/Workoutcontext"

export const useWorkoutsContext = ()=>{
    const context = useContext(WorkoutContex)

    if(!context){
        throw Error("UseContextHooks must be created inside WorkoutProvider");
    }

    return context
}