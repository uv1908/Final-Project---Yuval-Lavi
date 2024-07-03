import { useState } from 'react';
import styles from './SuperstarStats.module.scss';
import Superstar from '../../types/superstar';

interface SuperstarStatsProps {
    superstar: Superstar;
}

export default function SuperstarStats({ superstar }: SuperstarStatsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleStats = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.statsContainer} ${isOpen ? styles.open : ''}`}>
            <div className={styles.statsHeader} onClick={toggleStats}>
                <div className={styles.statsName}>
                    <h4>Superstar Stats</h4>
                    <p className={styles.dataBig}>{superstar.name}</p>
                </div>
                <div className={styles.statsSocial}>
                    <h4>Follow</h4>
                    <ul>
                        <li>
                            <a
                                aria-label={`Follow ${superstar.name} on Twitter`}
                                title={`Follow ${superstar.name} on Twitter`}
                                role="link"
                                className="js--no-intent icon icon--replace icon-twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Follow {superstar.name} on Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.statsProfile}>
                <div className={styles.statsProfileLeft}>
                    <div className={styles.statsProfileItem}>
                        <h4>Height</h4>
                        <p className={styles.dataBig}>{superstar.height}</p>
                    </div>
                    <div className={styles.statsProfileItem}>
                        <h4>Weight</h4>
                        <p className={styles.dataBig}>{superstar.weight}</p>
                        <span>lbs</span>
                    </div>
                    <div className={styles.statsProfileItem}>
                        <h4>Hometown</h4>
                        <p className={styles.dataSmall}>{superstar.hometown}</p>
                    </div>
                    <div className={styles.statsProfileItem}>
                        <h4>Signature Move</h4>
                        <p className={styles.dataSmall}>{superstar.signature_move}</p>
                    </div>
                </div>

                <div className={styles.statsProfileRight}>
                    <div className={styles.statsProfileItem}>
                        <h4>Career Highlights</h4>
                        <p>{superstar.career_highlights}</p>
                    </div>
                </div>
            </div>

            <button className={styles.closeButton} onClick={toggleStats}>
                close
            </button>
        </div>
    );
}
