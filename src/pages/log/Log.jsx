import LogWorkoutForm from "../../components/workoutForm/LogWorkoutForm";
import Info from "../../components/Info";
import { useState } from "react";
import workoutsData from '../../pages/log/workouts.json'


function Log() {
    const [workouts, setWorkouts] = useState(workoutsData)
    return (
        <>
            <div>
                <div>
                    <div className="flex flex-col md:flex-row py-10 md:justify-center">
                        <div className="my-5 px-5 text-left flex">
                            <div className="mb-1 mr-5">Logging effort for: </div>
                            <div>Today</div>
                        </div>

                        <div className="my-5 px-5 text-left flex">
                            <div className="mb-1 mr-5">Type of day :</div>
                            <div>Leg day</div>
                        </div>

                        <div className="my-5 px-5 text-left flex">
                            <div className="mb-1 mr-5">No of workouts :</div>
                            <div>5</div>
                        </div>
                    </div>
                    <div>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:place-items-center place-items-start'>{workouts.map(workout =>
                            <LogWorkoutForm key={workout.no} workout={workout}></LogWorkoutForm>
                        )}</div>
                        {workouts.length <= 0 && <div id='noWorkouts' className='text-center py-10'>
                            <p>
                                <span className='mr-3'><Info /></span>
                                You have not set any goal today ...
                            </p>
                        </div>}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Log;
