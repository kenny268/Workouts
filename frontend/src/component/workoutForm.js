import { useState } from "react"
import {useWorkoutsContext} from "../hooks/useContextHooks"
const WorkoutForm = () => {
    const {dispatch } = useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [errors,setError]= useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const workout = {title,load,reps}
        const response = await fetch('/api',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response){
            setError(json.error)
            console.log(json.error)
        }
        if(response.ok){
            setError('')
            setTitle('')
            setLoad('')
            dispatch({type: 'CREATE_WORKOUT',payload:json})
            
        }
         

    }

    return (
        <form  className="create" onSubmit={handleSubmit}>
         <h3>Add New Workout</h3>
         <label >Exersize Title</label>
         <input
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        />
        <label >Load In (kg)</label>
         <input
            type='number'
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
        />
        <label >Reps: </label>
         <input
            type='number'
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
        />
        <button>Add Workout</button>

        {errors && <div className="error"><p>{errors}</p></div> }
        </form>
    );
}
 
export default WorkoutForm;