import styles from './SuperstarStats.module.scss';
import Superstar from '../../types/superstar';

interface SuperstarStatsProps {
    superstar: Superstar;
    onClose: () => void;
}

export default function SuperstarStats({ superstar, onClose }: SuperstarStatsProps) {
    return (
        <div className={styles.statsContainer}>
            <div className={styles.statsHeader}>
                <div className={styles.statsName}>
                    <h4>Superstar Stats</h4>
                    <p className={styles.dataBig}>{superstar.name}</p>
                </div>
            </div>

            <div className={styles.statsProfile}>
                <div className={styles.statsProfileLeft}>
                    <div className={styles.statsProfileItem}>
                        <h4>Height</h4>
                        <p className={styles.dataBig}>{superstar.height}</p>
                    </div>
                    {superstar.weight && (
                        <div className={styles.statsProfileItem}>
                            <h4>Weight</h4>
                            <p className={styles.dataBig}>{superstar.weight}<span>lbs</span></p>
                        </div>
                    )}
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

            <button className={styles.closeButton} onClick={onClose}>X</button>
        </div>
    );
}