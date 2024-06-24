import LogoLink from '../LogoLink/LogoLink';
import NavLinks from '../NavLinks/NavLinks';
import UserSpace from '../UserSpace/UserSpace';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.linksContainer}>
                <LogoLink />
                <NavLinks />
            </div>
            <UserSpace />
        </div>
    );
}