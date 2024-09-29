import { useState } from "react";
import './workoutForm.css'
function WorkoutForm({ no }) {
    const [workoutName, setWorkoutName] = useState('')
    const [noOfSets, setNoOfSes] = useState(3)
    function handleWorkoutNameChange(e) {
        setWorkoutName(e.target.value)
    }
    function handleNoOfSetsBlur(e) {
        setNoOfSes(e.target.value)
    }
    return <>
        <div className="p-10 my-10 mx-10 border border-white shadow-white shadow-lg">
            <div className="flex flex-col">
                <div className="flex flex-col w-48 mb-5">
                    <label htmlFor="workoutName">Workout Name : </label>
                    <input id='workoutName' className="text-black" onChange={handleWorkoutNameChange} value={workoutName} />
                </div>
                <div className="flex flex-col w-48">
                    <label htmlFor="noOfSets">No of Sets : </label>
                    <input id='noOfSets' type="number" className="text-black" onBlur={handleNoOfSetsBlur} defaultValue={noOfSets} />
                </div>
            </div>

            <table className="mt-10">
                <thead>
                    <tr>
                        <th>Set</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: noOfSets }, (v, i) => i).map(i => <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="text-black"><input className="w-full" /></td>
                        <td className="text-black"><input className="w-full" /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    </>
}

export default WorkoutForm;