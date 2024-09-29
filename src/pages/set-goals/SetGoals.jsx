import moment from 'moment'
import { useEffect, useState } from 'react'
import WorkoutForm from '../../components/workoutForm/WorkoutForm'

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
                    <label htmlFor="goalDate">Set Goal For : </label>
                    <select id="goalDate" className="text-black">
                        {goalDates.map((goalDate) => (
                            <option key={goalDate}>{goalDate}</option>
                        ))}
                    </select>

                    <label htmlFor="workoutDay">Type of day : </label>
                    <input id="workoutDay" className="text-black" />

                    <label htmlFor="workouts">No of workouts : </label>
                    <input
                        id="workouts"
                        className="text-black"
                        type='number'
                        onBlur={handleWorkoutsBlur}
                    />
                    {Array.from({ length: workouts }, (v, i) => i).map(no =>
                        <WorkoutForm no={no}></WorkoutForm>
                    )}

                </div>
            </div>
        </>
    )
}

export default SetGoals
