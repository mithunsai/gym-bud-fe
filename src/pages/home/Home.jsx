import './Home.css'

function Home() {
    return <>
        <div className="mt-10">
            <section id="welcome" className="flex justify-center">
                <h2>Welcome Mithun M</h2>
            </section>
            <section id="set-goals" className="flex justify-evenly">
                <div className="basis-5/6 border border-red-700 rounded-md p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="font-semibold text-2xl">
                    <p className=''><span className='text-red-700'>SET</span>{` `}<span>GOAL</span></p>

                </div>
            </section>
            <section id="log" className="flex justify-evenly">
                <div className="font-semibold text-2xl float-left">
                    <p className=''><span className='text-red-700'>LOG</span>{` `}<span>EFFORT</span></p>
                </div>
                <div className="basis-5/6 border border-red-700 rounded-md p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </section>
        </div>
    </>
}

export default Home