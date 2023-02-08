import { useState } from "react"
import {useWorkoutsContext} from "../hooks/useContextHooks"

const WorkoutForm = () => {
    const {dispatch } = useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [errors,setError]= useState(null)
    const [emptyFields,setEmptyFields]=useState([])


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

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
            
        }
        if(response.ok){
            setError('')
            setTitle('')
            setLoad('')
            setReps('')
            dispatch({type: 'CREATE_WORKOUT',payload:json})
            
        }
         

    }

    console.log('null',errors)

    return (
        <form  className="create" onSubmit={handleSubmit}>
         <h3>Add New Workout</h3>
         <label >Exersize Title</label>
         <input
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title')? 'error':''}
        />
        <label >Load In (kg)</label>
         <input
            type='number'
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load')? 'error':''}
        />
        <label >Reps: </label>
         <input
            type='number'
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps')? 'error':''}
        />
        <button>Add Workout</button>

        {errors && <div className="error"><p>{errors}</p></div> }
        </form>
    );
}
 
export default WorkoutForm;