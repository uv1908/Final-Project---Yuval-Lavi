import { createContext, useState, ReactNode, useEffect } from 'react';
import User from '../types/user';

interface UserContextType {
    isLoggedIn: boolean;
    user: { email: string } | null;
    login: (userData: User) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType>({
    isLoggedIn: false,
    user: null,
    login: () => {},
    logout: () => {},
});

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<{ email: string } | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userData: User) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};