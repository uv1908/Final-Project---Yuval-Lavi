import wweLogo from '../../assets/wwe_logo.svg';
import OutsideNavLink from '../OutsideNavLink/OutsideNavLink';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerNavigation}>
                <div className={styles.footerNavigationWrapper}>
                    <div className={styles.columnWrapper}>
                        <div className={styles.menuWrapper}>
                            <div className={styles.menuLabel}>Corporate</div>
                            <ul className={styles.menu}>
                                <li><OutsideNavLink to="https://corporate.wwe.com/" className={styles.link}>Corporate</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://corporate.wwe.com/careers/careers-overview" className={styles.link}>Careers</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://corporate.wwe.com/impact" className={styles.link}>Impact</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/main-help/contact-us" className={styles.link}>Contact</OutsideNavLink></li>
                            </ul>
                        </div>
                        <div className={styles.menuWrapper}>
                            <div className={styles.menuLabel}>WWE.com</div>
                            <ul className={styles.menu}>
                                <li><OutsideNavLink to="https://www.wwe.com/news/" className={styles.link}>WWE News</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/videos/" className={styles.link}>WWE Videos</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/photos" className={styles.link}>WWE Photos</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/worldwide" className={styles.link}>WWE Worldwide</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://onlocationexp.com/wwe?utm_source=wwe.com&utm_medium=referral&utm_campaign=wwe-footer" className={styles.link}>Priority Pass</OutsideNavLink></li>
                            </ul>
                        </div>
                        <div className={styles.menuWrapper}>
                            <div className={styles.menuLabel}>About</div>
                            <ul className={styles.menu}>
                                <li><OutsideNavLink to="https://www.wwe.com/page/privacy-policy" className={styles.link}>Privacy Policy</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/main-help/generalfaq/copyright" className={styles.link}>Copyright</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/page/terms-and-conditions" className={styles.link}>Terms of Use</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/#" className={styles.link}>Cookie Preferences</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/page/do-not-sell-form" className={styles.link}>Do Not Sell or Share My Info</OutsideNavLink></li>
                            </ul>
                        </div>
                        <div className={styles.menuWrapper}>
                            <div className={styles.menuLabel}>Help</div>
                            <ul className={styles.menu}>
                                <li><OutsideNavLink to="https://www.wwe.com/page/security-policy" className={styles.link}>Security</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://help.wwe.com/" className={styles.link}>Help Center</OutsideNavLink></li>
                                <li><OutsideNavLink to="http://www.wwe.com/redeem" className={styles.link}>Redeem Gift Card</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://www.wwe.com/page/cookie-policy" className={styles.link}>Cookie Policy</OutsideNavLink></li>
                                <li><OutsideNavLink to="https://help.wwe.com/Answer/Detail/18?utm_source=dotcom&utm_medium=web&utm_campaign=closed_captions&utm_content=footer_link" className={styles.link}>Closed Captions</OutsideNavLink></li>
                            </ul>
                        </div>
                        <div className={styles.menuWrapper}>
                            <div className={styles.menuLabel}>Global Sites</div>
                            <ul className={styles.menu}>
                                <li><OutsideNavLink to="https://arabic.wwe.com/" className={styles.link}>Arabic</OutsideNavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <img src={wweLogo} alt="WWE Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}