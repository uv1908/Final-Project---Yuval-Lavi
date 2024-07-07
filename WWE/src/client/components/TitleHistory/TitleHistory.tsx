import { useEffect, useState } from 'react';
import type { TitleHistory } from '../../types/titleHistory';
import styles from './TitleHistory.module.scss';

interface TitleHistoryProps {
    titleId: number;
}

function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).toUpperCase();
}

export default function TitleHistory({ titleId }: TitleHistoryProps) {
    const [history, setHistory] = useState<TitleHistory[]>([]);
    const [showMore, setShowMore] = useState(false);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const fetchTitleHistory = async () => {
            try {
                const response = await fetch(`/api/title-history/${titleId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch title history');
                }
                const data: TitleHistory[] = await response.json();
                setHistory(data);
            } catch (err) {
                console.error('Error fetching title history:', err);
            }
        };

        fetchTitleHistory();
        if(showMore) {
            setShowMore(prev => !prev);
        }
    }, [titleId]);

    function toggleSortOrder() {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
        setHistory(prevHistory =>
            prevHistory.slice().sort((a, b) =>
                sortOrder === 'asc'
                    ? new Date(a.date_won).getTime() - new Date(b.date_won).getTime()
                    : new Date(b.date_won).getTime() - new Date(a.date_won).getTime()
            )
        );
    }

    if (!history.length) {
        return <div>Loading...</div>;
    }

    const totalHolders = history.length;
    const longestReign = Math.max(...history.map(h => h.days_held || 0));
    const shortestReign = Math.min(...history.map(h => h.days_held || 0));

    return (
        <div className={styles.titleHistory}>
            <h2>Championship Holders Over Time</h2>
            <div className={styles.summary}>
                <div className={styles.yearsActive}>2020 - Present</div>
                <div className={styles.statistics}>
                    <div className={styles.stat}>
                        <p>Championship Holders</p>
                        <h1>{totalHolders}</h1>
                    </div>
                    <div className={styles.stat}>
                        <p>Longest Reign</p>
                        <h1>{longestReign} <span>days</span></h1>
                    </div>
                    <div className={styles.stat}>
                        <p>Shortest Reign</p>
                        <h1>{shortestReign >= 1 ? shortestReign : "< 1"} <span>{shortestReign >= 2 ? "days" : "day"}</span></h1>
                    </div>
                </div>
                <div className={styles.toggleButton} onClick={() => setShowMore(!showMore)}>
                    <span>{showMore ? 'See Less -' : 'See More +'}</span>
                </div>
            </div>
            {showMore && (
                <div className={styles.details}>
                    <div className={styles.header} onClick={toggleSortOrder}>
                        <div className={styles.headerItem}>Champion</div>
                        <div className={styles.headerItem}>Date of Reign</div>
                        <span className={`${styles.sortArrow} ${sortOrder === 'desc' ? styles.active : ''}`}>▼</span>
                        <span className={`${styles.sortArrow} ${sortOrder === 'asc' ? styles.active : ''}`}>▲</span>
                    </div>
                    {history.map((holder, index) => (
                        <div key={index} className={styles.holderItem}>
                            <span className={styles.champion}>{holder.superstar_name}</span>
                            <span className={styles.dateOfReign}>
                                {formatDate(holder.date_won)} - {holder.date_lost ? formatDate(holder.date_lost) : 'PRESENT'}
                            </span>
                            <span className={styles.daysHeld}>{holder.days_held >= 1 ? holder.days_held : "< 1"} days</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};