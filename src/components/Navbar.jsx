import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const [activePage, setActivePage] = useState('home')
    function pageChange(page) {
        setActivePage(page)
    }
    return <>
        <div>
            <nav className="flex justify-between">
                <h1 className="basis-1/6 font-bold text-red-700 text-3xl">GYM BUD</h1>
                <ul className="basis-2/6 flex justify-end">
                    <Link className={`px-5 mx-5 pb-4 cursor-pointer ${activePage === 'home' && 'border-b-4 border-b-red-700'}`} onClick={() => { pageChange('home') }} to={"home"}>Home</Link>
                    <Link className={`px-5 mx-5 pb-4 cursor-pointer ${activePage === 'set_goal' && 'border-b-4 border-b-red-700'}`} onClick={() => { pageChange('set_goal') }} to={"home"}>Set Goal</Link>
                    <Link className={`px-5 mx-5 pb-4 cursor-pointer ${activePage === 'log' && 'border-b-4 border-b-red-700'}`} onClick={() => { pageChange('log') }} to={"home"}>Log</Link>
                </ul>
            </nav>
        </div>
    </>
}

export default Navbar