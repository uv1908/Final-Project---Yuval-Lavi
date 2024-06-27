import { useState } from 'react';
import wweLogo from '../../assets/wwe_logo.svg'
import wweNetwork from '../../assets/wwe_network.png';
import signIn from '../../assets/sign_in.svg';
import accountIcon from '../../assets/account.svg';
import searchIcon from '../../assets/search.svg';
import NetworkPromo from '../NetworkPromo/NetworkPromo';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import styles from './UserSpace.module.scss';

export default function UserSpace() {
    const [showPromo, setShowPromo] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    function handleMouseEnter() {
        setShowPromo(true);
    }

    function handleMouseLeave() {
        setShowPromo(false);
    }

    function handleClick() {
        setUserMenu(prev => !prev);
    }

    function handleSignInClick() {
        setShowSignIn(true);
        setShowSignUp(false);
    }

    function handleCloseSignIn() {
        setShowSignIn(false);
    }

    function handleSignUpClick() {
        setShowSignUp(true);
        setShowSignIn(false);
    }

    function handleCloseSignUp() {
        setShowSignUp(false);
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
                    <div className={styles.navigationUserMenu} style={{ display: 'flex' }}>
                        <div className={styles.logo}>
                            <img src={wweLogo} alt="WWE" width="37" />
                        </div>
                        <div className={styles.actions}>
                            {isLoggedIn ? (
                                <div className={styles.userMenuSignedOut} style={{ display: 'flex' }}>
                                    <div className={styles.userEmail}>ADD EMAIL FROM DATABASE</div>
                                    <div className={`${styles.anchor} ${styles.userSignOut}`}>Sign Out</div>
                                </div>
                            ) : (
                                <div className={styles.userMenuSignedIn}>
                                    <div className={styles.signInButton} onClick={handleSignInClick}>
                                        <div className={styles.logo}>
                                            <img src={signIn} width="24" />
                                        </div>
                                        <div className={styles.text}>Sign in to WWE</div>
                                    </div>
                                    <div className={styles.horizontalDivider}></div>
                                    <div className={styles.noAccount}>Don't have a WWE account?</div>
                                    <div className={styles.anchor} onClick={handleSignUpClick}>Sign Up</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <img src={searchIcon} alt='search' />

            {showSignIn && (
                <>
                    <div className={styles.backdrop}></div>
                    <SignIn onClose={handleCloseSignIn} onSwitchToSignUp={handleSignUpClick} />
                </>
            )}
            {showSignUp && (
                <>
                    <div className={styles.backdrop}></div>
                    <SignUp onClose={handleCloseSignUp} onSwitchToSignIn={handleSignInClick} />
                </>
            )}
        </div>
    );
}