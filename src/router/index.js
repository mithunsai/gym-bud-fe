import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx"
import App from "../App.jsx";
import SetGoals from "../pages/set-goals/SetGoals.jsx";

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
        }
    ]
}])

export default router