import React, { ReactNode, useContext } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';


interface AdminRouteProps {
    path: string;
    element: ReactNode;
}

export default function AdminRouteGuard({ path, element }: AdminRouteProps) {
    const { user } = useContext(UserContext);

    const isAdmin = user?.email === 'admin@wwe.com';

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <Route path={path} element={element} />;
};