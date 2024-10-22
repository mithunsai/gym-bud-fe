import { useState } from "react";
import Info from "../Info";
import './GoalWorkoutForm.css'
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
                    <div className='flex justify-between mb-1'><label htmlFor="workoutName" className='' >Workout Name : </label> <span className='text-right'><Info /></span></div>

                    <input id='workoutName' className="text-black" onChange={handleWorkoutNameChange} value={workoutName} />
                </div>
                <div className="flex flex-col w-48">
                    <div className='flex justify-between mb-1'><label htmlFor="noOfSets" className='' >No of Sets : </label> <span className='text-right'><Info /></span></div>

                    <input id='noOfSets' type="number" className="text-black" onBlur={handleNoOfSetsBlur} defaultValue={noOfSets} />
                </div>
            </div>

            <table className="mt-10">
                <thead>
                    <tr>
                        <th>Set</th>
                        <th>Reps <Info/></th>
                        <th>Weight <Info/></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: noOfSets }, (v, i) => i).map(i => <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="text-black"><input type="number" min={1} className="w-full" /></td>
                        <td className="text-black"><input type="number" min={0} className="w-full" /></td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    </>
}

export default WorkoutForm;