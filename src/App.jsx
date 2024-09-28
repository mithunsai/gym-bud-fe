import { Outlet } from "react-router-dom"

function App() {
    return <>
        <h1 className="text-red-500">Hello from App</h1>
        <Outlet />
    </>
}

export default App