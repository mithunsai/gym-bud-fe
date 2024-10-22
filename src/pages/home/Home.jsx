import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return <>
        <div className="mt-10">
            <section id="welcome" className="flex justify-center">
                <h2 className='font-semibold text-2xl'><span>Welcome</span>{` `}<span className='text-red-700'>Mithun M</span></h2>
            </section>
            <section id="set-goals" className="flex flex-col-reverse md:flex-row">
                <div className="basis-5/6 border rounded-md p-5 md:mr-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <Link to={'/set-goals'} className='text-red-700'>Click here</Link>
                </div>
                <div className="font-semibold text-2xl">
                    <p className='mb-3'>SET GOAL</p>

                </div>
            </section>
            <section id="log" className="flex flex-col md:flex-row">
                <div className="font-semibold text-2xl float-left">
                    <p className='mb-3'>LOG EFFORT</p>
                </div>
                <div className="basis-5/6 border rounded-md p-5 md:ml-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <Link to={'/log'} className='text-red-700'>Click here</Link>
                </div>
            </section>
        </div>
    </>
}

export default Home