import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
    return <>
        <div className="bg-black h-screen text-white p-10">
            <Navbar />
            <Outlet />
        </div>

    </>
}

export default App