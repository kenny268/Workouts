import { useEffect} from "react";
import WorkoutDetail from "../component/workoutDetails";
import WorkoutForm from "../component/workoutForm";
import {useWorkoutsContext} from "../hooks/useContextHooks"

const Home = () => {
    const {workouts,dispatch} =useWorkoutsContext()
  
    useEffect(()=>{
        const workoutsData = async ()=>{
            const responces = await fetch('/api')
            const json = await responces.json()    
            if(responces.ok){
                dispatch({type: 'SET_WORKOUT',payload:json})
            }
        }
        workoutsData()
    },[dispatch])

    console.log(workouts)
    
    return (
        <div className="home">
            <div className="workouts">
                
            {workouts && workouts.map(workout=>(
                <WorkoutDetail  workout={workout} key={workout._id} />
            ))}
            </div>
            <WorkoutForm/>
        </div>

      );
}
 
export default Home