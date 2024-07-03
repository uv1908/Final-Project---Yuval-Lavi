import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function NavBarWrapper() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}