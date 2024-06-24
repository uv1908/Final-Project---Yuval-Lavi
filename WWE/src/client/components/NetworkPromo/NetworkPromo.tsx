import styles from './NetworkPromo.module.scss';

export default function NetworkPromo() {
    return (
        <div className={`${styles.networkPromo} ${styles.promoVisible}`}>
            <p>Watch every Premium Live Event and get unlimited access to WWE's premium content - available to you anywhere, anytime, on any device.</p>
            <a className={`${styles.wweButton} ${styles.buttonDefault}`} href="https://www.wwe.com/wwenetwork?utm_source=wwecom&amp;utm_medium=nav&amp;utm_campaign=evergreen" target="_blank" rel="noopener noreferrer">Go to WWE Network</a>
        </div>
    );
}
