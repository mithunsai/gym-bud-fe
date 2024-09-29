import { useState } from "react";

function WorkoutForm({ no }) {
    const [workoutName, setWorkoutName] = useState('')
    const [noOfSets, setNoOfSes] = useState(0)
    function handleWorkoutNameChange(e) {
        setWorkoutName(e.target.value)
    }
    function handleNoOfSetsBlur(e) {
        setNoOfSes(e.target.value)
    }
    return <>
        <div>
            <label htmlFor="workoutName">Workout Name : </label>
            <input id='workoutName' className="text-black" onChange={handleWorkoutNameChange} value={workoutName} />

            <label htmlFor="noOfSets">No of Sets : </label>
            <input id='noOfSets' type="number" className="text-black" onBlur={handleNoOfSetsBlur} defaultValue={noOfSets} />
            <table>
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
                        <td className="text-black"><input /></td>
                        <td className="text-black"><input /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    </>
}

export default WorkoutForm;