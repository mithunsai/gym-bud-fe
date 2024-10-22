function Log() {
    return (
        <>
            <div>
                <div>
                    <div className="flex flex-col md:flex-row py-10 md:justify-center">
                        <div className="my-5 px-5 text-left flex md:w-80">
                            <div className="mb-1 mr-5">Logging effort for: </div>
                            <div>Today</div>
                        </div>

                        <div className="my-5 px-5 text-left flex md:w-80">
                            <div className="mb-1 mr-5">Type of day :</div>
                            <div>Leg day</div>
                        </div>

                        <div className="my-5 px-5 text-left flex md:w-80">
                            <div className="mb-1 mr-5">No of workouts :</div>
                            <div>5</div>
                        </div>
                    </div>
                    {/* <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:place-items-center place-items-start'>{Array.from({ length: workouts }, (v, i) => i).map(no =>
                <GoalWorkoutForm no={no}></GoalWorkoutForm>
            )}</div>
            {workouts <= 0 && <div id='noWorkouts' className='text-center py-10'>
                <p>
                    <span className='mr-3'><Info /></span>
                    Please specify your no of workouts to set your goal ...
                </p>
            </div>}

        </div> */}
                </div>
            </div>
        </>
    );
}

export default Log;
