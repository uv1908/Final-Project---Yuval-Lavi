import { NavLink } from 'react-router-dom';
import OutsideNavLink from '../OutsideNavLink/OutsideNavLink';

export default function NavLinks() {
    return (
        <>
            <OutsideNavLink to="https://network.wwe.com/home">WWE NETWORK</OutsideNavLink>
            <NavLink to="/shows">SHOWS</NavLink>
            <NavLink to="/superstars">SUPERSTARS</NavLink>
            <OutsideNavLink to="https://www.wwe.com/events/results/all-events/all-dates">TICKETS</OutsideNavLink>
            <OutsideNavLink to="https://shop.wwe.com/en/?_s=bm-HP-WWEcom-Shop-Main_Nav-2022">SHOP</OutsideNavLink>
        </>
    );
}