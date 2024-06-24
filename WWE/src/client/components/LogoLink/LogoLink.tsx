import { NavLink } from 'react-router-dom';
import wweLogo from '../../assets/wwe_logo.svg';
import './LogoLink.module.scss';

export default function LogoLink() {
    return (
        <NavLink to="/">
            <img src={wweLogo} alt='wwe_logo' />
        </NavLink>
    );
}