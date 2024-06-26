import { useEffect, useState } from 'react';
import wweLogo from '../../assets/wwe_logo.svg';
import exit from '../../assets/exit.svg';
import toggleHide from '../../assets/toggle_hide.svg';
import toggleShow from '../../assets/toggle_show.svg';
import SignUp from '../SignUp/SignUp';
import styles from './SignIn.module.scss';

interface SignInProps {
    onClose: () => void;
}

export default function SignIn({ onClose }: SignInProps) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: ' ', password: ' ' });
    const [validated, setValidated] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    useEffect(() => {
        setValidated(!errors.email && !errors.password);
    }, [email, password, errors]);


    function togglePasswordVisibility() {
        setPasswordVisible(prev => !prev);
    }

    function validateEmail() {
        if (!email) {
            setErrors(prev => ({ ...prev, email: 'Email is required' }));
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors(prev => ({ ...prev, email: 'Email address is invalid' }));
        } else {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    }

    function validatePassword() {
        if (!password) {
            setErrors(prev => ({ ...prev, password: 'Password is required' }));
        } else if (password.length < 6) {
            setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
        } else {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    }

    function handleSignUp() {
        setShowSignUp(true);
    }

    function handleCloseSignUp() {
        setShowSignUp(false);
    }

    return (
        <>
            <dialog className={styles.signInDialog} aria-modal={!showSignUp} open>
                <header>
                    <img src={wweLogo} width="48" alt="WWE Logo" />
                    <div className={styles.close} onClick={onClose}>
                        <img src={exit} width="16" alt="Close" />
                    </div>
                </header>

                <form className={styles.signInForm}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                        />
                        <div>
                            {errors.email && <div className={styles.inputError}>{errors.email}</div>}
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className={styles.input}
                            placeholder="Password"
                            minLength={6}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                        />
                        <img
                            src={passwordVisible ? toggleShow : toggleHide}
                            className={styles.inputVision}
                            height="16"
                            width="22"
                            alt="Toggle Password Visibility"
                            onClick={togglePasswordVisibility}
                        />
                        <div>
                            {errors.password && <div className={styles.inputError}>{errors.password}</div>}
                        </div>
                    </div>

                    <div className={styles.forgotPasswordButton} tabIndex={0}>Forgot my password</div>
                    <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`} disabled={!validated}>
                        Sign In
                    </button>

                    <div className={styles.signUpLabel}>Don't have a WWE account?</div>
                    <div className={`${styles.anchor} ${styles.bold}`} tabIndex={0} onClick={handleSignUp}>Sign Up</div>
                </form>
            </dialog>

            {showSignUp && (
                <>
                    <div className={styles.backdrop}></div>
                    <SignUp onClose={handleCloseSignUp} />
                </>
            )}
        </>
    );
};