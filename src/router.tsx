import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
/* import Landing from "./Pages/Landing" */
import About from "./Pages/About"
/* import Menu from "./Pages/Menu"
import Status from "./Pages/Status" */

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
           {/*  <Route index element={<Landing/>} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route path="/menu" element={<Menu />} />
            <Route path="/status" element={<Status />} /> */}
        </Route>
    )
)
