import Info from "../Info";
import './LogWorkoutForm.css'
function LogWorkoutForm({ workout }) {
    return (
        <>
            <div className="md:p-10 p-5 my-10 md:mx-10 border border-white shadow-white shadow-lg">
                <div className="flex flex-col">
                    <div className="flex flex-col w-48 mb-5">
                        <div className='flex justify-between mb-1'>Workout Name : </div>
                        <div>{workout.name}</div>
                    </div>
                    <div className="flex flex-col w-48">
                        <div className='flex justify-between mb-1'>No of Sets : </div>

                        <div>{workout.sets.length}</div>
                    </div>
                </div>

                <table className="mt-10">
                    <thead>
                        <tr>
                            <th rowSpan={2}>Set</th>
                            <th colSpan={2}>Reps <Info /></th>
                            <th colSpan={2}>Weight <Info /></th>
                        </tr>
                        <tr>
                            <th>Goal</th>
                            <th>Actual</th>
                            <th>Goal</th>
                            <th>Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workout.sets.map(set => <tr key={set.no}>
                            <td>{set.no}</td>
                            <td>{set.reps.goal}</td>
                            <td className="text-black"><input type="number" min={1} className="w-full" defaultValue={set.reps.actual} /></td>
                            <td>{set.weight.goal}</td>
                            <td className="text-black"><input type="number" min={0} className="w-full" defaultValue={set.weight.actual} /></td>
                        </tr>)}
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default LogWorkoutForm;