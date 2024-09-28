import { createRoot } from "react-dom/client";
import App from "./App";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import './index.css'

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}><App /></RouterProvider>);