import {useWorkoutsContext} from "../hooks/useContextHooks"
import formatDistanceToKnow from 'date-fns/formatDistanceToNow'
const WorkoutDetail = ({workout}) => {
    const {dispatch } = useWorkoutsContext()

    const handleDelete = async ()=>{
       
        const responces = await fetch('/api/'+workout._id,{
            method:'DELETE'
        })
        const json = await responces.json()

        if(responces.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload : json })

            //console.log(json)
        }
    }

    
    return (  
        <div className="workout-details">
            <h4>{workout.title}</h4>
            
            <p><strong>Load kg: </strong>{workout.load}</p>
            <p><strong>reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToKnow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
        </div>
    );
}
 
export default WorkoutDetail;