import { useState } from 'react';
import wweLogo from '../../assets/wwe_logo.svg'
import wweNetwork from '../../assets/wwe_network.png';
import signIn from '../../assets/sign_in.svg';
import accountIcon from '../../assets/account.svg';
import searchIcon from '../../assets/search.svg';
import NetworkPromo from '../NetworkPromo/NetworkPromo';
import styles from './UserSpace.module.scss';

export default function UserSpace() {
    const [showPromo, setShowPromo] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleMouseEnter() {
        setShowPromo(true);
    }

    function handleMouseLeave() {
        setShowPromo(false);
    }

    function handleClick() {
        setUserMenu(prev => !prev);
    }

    return (
        <div className={styles.userSpace}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
                <img src={wweNetwork} alt='wwe network' />
                {showPromo && <NetworkPromo />}
            </div>
            <div className={styles.verticalBreak}></div>
            <div onClick={handleClick} style={{ position: 'relative' }}>
                <img src={accountIcon} alt='account' />
                {userMenu && (
                    <div className={styles['navigation-user-menu']} style={{ display: 'flex' }}>
                        <div className={styles.logo}>
                            <img src={wweLogo} alt="WWE" width="37" />
                        </div>
                        <div className={styles.actions}>
                            {isLoggedIn ? (
                                <div className={styles['user-menu_signedout']} style={{ display: 'flex' }}>
                                    <div className={styles['user-email']}>ADD EMAIL FROM DATABASE</div>
                                    <div id="signout-button" className={`${styles.anchor} ${styles['user-signout']}`}>Sign Out</div>
                                </div>
                            ) : (
                                <div className={styles['user-menu_signedin']}>
                                    <div className={styles['signin-button']}>
                                        <div className={styles.logo}>
                                            <img src={signIn} width="24" />
                                        </div>
                                        <div className={styles.text}>Sign in to WWE</div>
                                    </div>
                                    <div className={styles['horizontal-divider']}></div>
                                    <div className={styles['no-account']}>Don't have a WWE account?</div>
                                    <div id="signup-button" className={styles.anchor}>Sign Up</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <img src={searchIcon} alt='search' />
        </div>
    );
}
