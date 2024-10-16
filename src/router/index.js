import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx"
import App from "../App.jsx";
import SetGoals from "../pages/set-goals/SetGoals.jsx";
import Log from "../pages/log/Log.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'set-goals',
            element: <SetGoals />
        },
        {
            path: 'log',
            element: <Log />
        }
    ]
}])

export default router