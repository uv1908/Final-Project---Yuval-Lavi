import { FormEvent, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import wweLogo from '../../assets/wwe_logo.svg';
import exit from '../../assets/exit.svg';
import toggleHide from '../../assets/toggle_hide.svg';
import toggleShow from '../../assets/toggle_show.svg';
import styles from './SignUp.module.scss';

interface SignUpProps {
    onClose: () => void;
    onSwitchToSignIn: () => void;
}

export default function SignUp({ onClose, onSwitchToSignIn }: SignUpProps) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [consentChecked, setConsentChecked] = useState(false);
    const [marketingConsentChecked, setMarketingConsentChecked] = useState(false);
    const [errors, setErrors] = useState({ email: ' ', password: ' ', firstName: ' ', lastName: ' ' });
    const [validated, setValidated] = useState(false);
    const [signUpError, setSignUpError] = useState<string | null>(null);

    const { login } = useContext(UserContext);

    useEffect(() => {
        setValidated(!errors.email && !errors.password && !errors.firstName && !errors.lastName && consentChecked);
    }, [email, password, firstName, lastName, errors, consentChecked]);

    function validateFirstName() {
        if (!firstName) {
            setErrors(prev => ({ ...prev, firstName: 'This field is required.' }));
        }
        else {
            setErrors(prev => ({ ...prev, firstName: '' }));
        }
    }

    function validateLastName() {
        if (!lastName) {
            setErrors(prev => ({ ...prev, lastName: 'This field is required.' }));
        }
        else {
            setErrors(prev => ({ ...prev, lastName: '' }));
        }
    }

    function validateEmail() {
        if (!email) {
            setErrors(prev => ({ ...prev, email: 'This field is required.' }));
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors(prev => ({ ...prev, email: "The email you've entered is invalid. Please try again." }));
        } else {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    }

    function validatePassword() {
        if (!password) {
            setErrors(prev => ({ ...prev, password: 'This field is required.' }));
        } else if (password.length < 6) {
            setErrors(prev => ({ ...prev, password: 'Password must be 6 characters in length or longer.' }));
        } else {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    }

    function togglePasswordVisibility() {
        setPasswordVisible(prev => !prev);
    }

    async function addUser(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log('Adding User:', { firstName, lastName, email, password, marketingConsentChecked });
        try {
            const response = await fetch('/api/users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    marketing: marketingConsentChecked,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const data = await response.json();
            console.log('API Response:', data);

            if (data && data.user && data.user.email) {
                login(data.user);
            } else {
                throw new Error('User data not found in response');
            }

            setSignUpError(null);
        } catch (error) {
            console.error('Error:', error);
            setSignUpError('Failed to create user');
        } finally {
            onClose();
        }
    }

    return (
        <>
            <dialog className={styles.signUpDialog} aria-modal="true">
                <header>
                    <img src={wweLogo} width="48" alt="WWE Logo" />
                    <div className={styles.close} onClick={onClose}>
                        <img src={exit} width="16" alt="Close" />
                    </div>
                </header>

                {signUpError && <h1 className={styles.signUpError}>{signUpError}</h1>}
                <form className={styles.signUpForm}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="First Name"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                            onBlur={validateFirstName}
                        />
                        <div>
                            {errors.firstName && <div className={styles.inputError}>{errors.firstName}</div>}
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Last Name"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={validateLastName}
                        />
                        <div>
                            {errors.lastName && <div className={styles.inputError}>{errors.lastName}</div>}
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Email Address"
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
                            alt="Toggle visibility"
                            onClick={togglePasswordVisibility}
                        />
                        <div>
                            {errors.password && <div className={styles.inputError}>{errors.password}</div>}
                        </div>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="signUpConsent"
                            type="checkbox"
                            className={styles.signUpConsent}
                            checked={consentChecked}
                            onChange={() => setConsentChecked(!consentChecked)}
                            required
                        />
                        <div className={styles.checkboxLabel}>
                            <label htmlFor="signUpConsent">
                                {consentChecked && (
                                    <span className={styles.checkmark}></span>
                                )}
                                I am 18 years of age or older and agree with the <a href="https://www.wwe.com/page/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://www.wwe.com/page/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms of Use</a>.</label>
                        </div>
                    </div>
                    <div className={styles.checkbox}>
                        <input
                            id="marketingConsent"
                            type="checkbox"
                            className={styles.signUpConsent}
                            checked={marketingConsentChecked}
                            onChange={() => setMarketingConsentChecked(!marketingConsentChecked)}
                        />
                        <div className={styles.checkboxLabel}>
                            <label htmlFor="marketingConsent">
                                {marketingConsentChecked && (
                                    <span className={styles.checkmark}></span>
                                )}
                                I consent to receiving marketing communications from WWE, and its affiliates, about special offers and other products.</label>
                        </div>
                    </div>
                    <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} disabled={!validated} onClick={addUser}>Create Account</button>
                    <div className={styles.signInLabel}>
                        Already have an account? <p style={{ color: "black" }}>.....</p>
                        <div className={`${styles.anchor} ${styles.bold}`} tabIndex={0} onClick={onSwitchToSignIn}>Sign In</div>
                    </div>
                </form>
            </dialog>
        </>
    );
}