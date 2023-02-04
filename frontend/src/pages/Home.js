import { useEffect, useState } from "react";
import WorkoutDetail from "../component/workoutDetails";
import WorkoutForm from "../component/workoutForm";

const Home = () => {
    const [workouts,setWorkouts] = useState(null);
    const [error,setError] = useState(null)
    useEffect(()=>{
        const workoutsData = async ()=>{
            const responces = await fetch('/api')
            const json = await responces.json()
            
            
    
            if(responces.ok){
                setWorkouts(json)
                setError(null)
            }
        }
        workoutsData()
    },[])
    
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