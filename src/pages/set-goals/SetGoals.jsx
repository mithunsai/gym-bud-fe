import moment from 'moment'
import { useEffect, useState } from 'react'
import WorkoutForm from '../../components/workoutForm/WorkoutForm'
import Info from '../../components/Info'

function SetGoals() {
    const [goalDates, setGoalDates] = useState([])
    const [workouts, setWorkouts] = useState(0)
    function handleWorkoutsBlur(e) {
        setWorkouts(e.target.value)
    }
    useEffect(() => {
        let dates = []
        for (let i = 0; i < 7; i++) {
            const today = moment()
            dates.push(today.add(i, 'days'))
        }
        setGoalDates(dates.map((date) => date.format('DD-MM-YYYY')))
        console.log(goalDates)
    }, [])

    return (
        <>
            <div>
                <div>
                    <div className='flex flex-col md:flex-row py-10 md:justify-center'>

                        <div className='my-5 px-5 text-left flex flex-col md:w-72'>
                            <div className='flex justify-between mb-1'><label htmlFor="goalDate" className='' >Set Goal For :</label> <span className='text-right'><Info /></span></div>

                            <select id="goalDate" className="text-black">
                                {goalDates.map((goalDate) => (
                                    <option key={goalDate}>{goalDate}</option>
                                ))}
                            </select>
                        </div>

                        <div className='my-5 px-5 text-left flex flex-col md:w-72'>
                            <div className='flex justify-between mb-1'><label htmlFor="workoutDay" className='' >Type of day :</label> <span className='text-right'><Info /></span></div>
                            <input id="workoutDay" className="text-black" />
                        </div>

                        <div className='my-5 px-5 text-left flex flex-col md:w-72'>
                            <div className='flex justify-between mb-1'><label htmlFor="workouts" className='' >No of workouts :</label> <span className='text-right'><Info /></span></div>

                            <input
                                id="workouts"
                                className="text-black"
                                type='number'
                                min={1}
                                defaultValue={workouts}
                                onBlur={handleWorkoutsBlur}
                            /></div>
                    </div>
                    <div>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:place-items-center place-items-start'>{Array.from({ length: workouts }, (v, i) => i).map(no =>
                            <WorkoutForm no={no}></WorkoutForm>
                        )}</div>
                        {workouts <= 0 && <div id='noWorkouts' className='text-center py-10'>
                            <p>
                                <span className='mr-3'><Info /></span>
                                Please specify your no of workouts to set your goal ...
                            </p>
                        </div>}

                    </div>


                </div>
            </div>
        </>
    )
}

export default SetGoals
