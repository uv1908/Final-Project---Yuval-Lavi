import { createBrowserRouter } from "react-router-dom";
import NavBarWrapper from "../layout/NavBarWrapper/NavBarWrapper";
import Home from "../pages/Home/Home";
import Shows from "../pages/Shows/Shows";
import Superstars from "../pages/Superstars/Superstars";
import Raw from "../pages/Raw/Raw";
import Smackdown from "../pages/Smackdown/Smackdown";
import SuperstarPage from "../pages/SuperstarPage/SuperstarPage";
import Users from "../pages/Users/Users";
import AdminRouteGuard from "../components/AdminRouteGuard/AdminRouteGuard";
import TitlePage from "../pages/TitlePage/TitlePage";

const router = createBrowserRouter([{
    path: "/",
    element: <NavBarWrapper />,
    children: [
        { path: "", element: <Home /> },
        { path: "/Shows", element: <Shows /> },
        { path: "/Shows/raw", element: <Raw /> },
        { path: "/Shows/smackdown", element: <Smackdown /> },
        { path: "/Superstars", element: <Superstars /> },
        { path: "/Superstars/:id", element: <SuperstarPage /> },
        { path: "/Titles/:id", element: <TitlePage /> },
        { path: "/users", element: <AdminRouteGuard component={Users} /> },
    ]
}]);

export default router;