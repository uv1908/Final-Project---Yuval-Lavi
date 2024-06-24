import { createBrowserRouter } from "react-router-dom";
import NavBarWrapper from "../layout/NavBarWrapper/NavBarWrapper";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Shows from "../pages/Shows/Shows";
import Superstars from "../pages/Superstars/Superstars";


const router = createBrowserRouter([{
    path: "/",
    element: <NavBarWrapper />,
    children: [
        { path: "", element: <Home /> },
        { path: "/news", element: <News /> },
        { path: "/Shows", element: <Shows /> },
        { path: "/Superstars", element: <Superstars /> },
    ]
}]);

export default router;