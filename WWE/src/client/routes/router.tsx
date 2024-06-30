import { createBrowserRouter } from "react-router-dom";
import NavBarWrapper from "../layout/NavBarWrapper/NavBarWrapper";
import Home from "../pages/Home/Home";
import Shows from "../pages/Shows/Shows";
import Superstars from "../pages/Superstars/Superstars";
import SuperstarPage from "../components/SuperstarPage/SuperstarPage";


const router = createBrowserRouter([{
    path: "/",
    element: <NavBarWrapper />,
    children: [
        { path: "", element: <Home /> },
        { path: "/superstar/:id", element: <SuperstarPage /> },
        { path: "/Shows", element: <Shows /> },
        { path: "/Superstars", element: <Superstars /> },
    ]
}]);

export default router;