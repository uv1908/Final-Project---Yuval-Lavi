import { createBrowserRouter, Route, Routes } from "react-router-dom";
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
        { path: "/users", element: <Users /> },
        // { path: "/users", element: <AdminRouteGuard path="/users" element={<Users />} /> },
    ]
}]);

// const router = (
//     <Routes>
//         <Route
//             path="/"
//             element={<NavBarWrapper />}
//         >
//             <Route path="/" element={<Home />} />
//             <Route path="/Shows" element={<Shows />} />
//             <Route path="/Shows/raw" element={<Raw />} />
//             <Route path="/Shows/smackdown" element={<Smackdown />} />
//             <Route path="/Superstars" element={<Superstars />} />
//             <Route path="/Superstars/:id" element={<SuperstarPage />} />
//             <Route path="/users" element={<AdminRouteGuard path="/users" element={<Users />} />} />
//         </Route>
//     </Routes>
// );

export default router;