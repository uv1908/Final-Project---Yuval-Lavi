import Superstar from "../../types/superstar";
import SuperstarStats from "../../components/SuperstarStats/SuperstarStats";
import styles from "./SuperstarPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function SuperstarPage() {
    const { id } = useParams<{ id: string }>();
    const [superstar, setSuperstar] = useState<Superstar | null>(null);
    const [isStatsOpen, setIsStatsOpen] = useState(false);

    useEffect(() => {
        async function fetchSuperstarDetails() {
            try {
                const response = await fetch(`/api/superstars/${id}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch superstar details');
                }

                const data = await response.json();
                setSuperstar(data);
            } catch (err) {
                console.error('Error fetching superstar:', err);
            }
        }

        fetchSuperstarDetails();
    }, [id]);

    function toggleStats() {
        setIsStatsOpen(prev => !prev);
    }

    function closeStats() {
        setIsStatsOpen(false);
    }

    if (!superstar) {
        return <p>Superstar not found</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.superstarContent}>
                <img src={superstar.img_url} alt={superstar.name} className={styles.superstarImg} />
                <div className={styles.infoContainer}>
                    {superstar.brand_name != "Alumni" && (
                        <img src={superstar.brand_img_url} alt={superstar.brand_name} className={styles.brandImg} />
                    )}
                    <div className={styles.nameAndTitle}>
                        <h1 className={styles.name}>{superstar.name}</h1>
                        {superstar.title && (
                            <Link to={`/Titles/${superstar.title_id}`}>
                                <div className={styles.title}>
                                    <img src={superstar.title_img_url} alt={superstar.title} />
                                    <h2>{superstar.title} <span>🡢</span></h2>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className={styles.championships}>
                    </div>
                    <button onClick={toggleStats} className={styles.statsButton}>Superstar Stats</button>
                </div>
                {isStatsOpen && (
                    <SuperstarStats superstar={superstar} onClose={closeStats} />
                )}
            </div>
        </div>
    );
}