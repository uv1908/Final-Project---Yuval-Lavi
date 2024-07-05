import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import router from "./routes/router";
import AdminRouteGuard from "./components/AdminRouteGuard/AdminRouteGuard";
import Users from "./pages/Users/Users";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <UserProvider>
            <RouterProvider router={router}/>
            {/* <BrowserRouter>
                {router}
            </BrowserRouter> */}
        </UserProvider>
    </React.StrictMode>,
);