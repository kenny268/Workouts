import {useWorkoutsContext} from "../hooks/useContextHooks"

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
            <p>{workout.createdAt}</p>
            <span onClick={handleDelete}>Delete</span>
        </div>
    );
}
 
export default WorkoutDetail;