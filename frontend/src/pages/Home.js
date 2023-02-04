import { useEffect, useState } from "react";
import WorkoutDetail from "../component/workoutDetails";
import WorkoutForm from "../component/workoutForm";
import {useWorkoutsContext} from "../hooks/useContextHooks"

const Home = () => {
    const {workouts,dispatch} =useWorkoutsContext()
    const [error,setError] = useState(null)
    useEffect(()=>{
        const workoutsData = async ()=>{
            const responces = await fetch('/api')
            const json = await responces.json()
            
            
    
            if(responces.ok){
                dispatch({type: 'SET_WORKOUT',payload:json})
                setError(null)
            }
        }
        workoutsData()
    },[dispatch])
    
    return (
        <div className="home">
            <div className="workouts">
                {error && <div className="error"> {error}</div> }
            {workouts && workouts.map((workout)=>(
                <WorkoutDetail key={workout._id} workout={workout}/>
            ))}
            </div>
            <WorkoutForm/>
        </div>
      );
}
 
export default Home