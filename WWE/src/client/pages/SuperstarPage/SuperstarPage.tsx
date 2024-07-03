import Superstar from "../../types/superstar";
import SuperstarStats from "../../components/SuperstarStats/SuperstarStats";
import styles from "./SuperstarPage.module.scss";
import { useParams } from "react-router-dom";
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
                setSuperstar(data); // Assuming data is the fetched superstar object
            } catch (err) {
                console.error('Error fetching superstar:', err);
            }
        }

        fetchSuperstarDetails();
    }, [id]);

    function toggleStats() {
        console.log('Toggle Stats Button Clicked');
        setIsStatsOpen(!isStatsOpen);
    }

    if (!superstar) {
        return <p>Superstar not found</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.superstarContent}>
                <img src={superstar.img_url} alt={superstar.name} className={styles.superstarImg} />
                <div className={styles.infoContainer}>
                    <img src={superstar.brand_img_url} alt={superstar.brand_name} className={styles.brandImg} />
                    <div className={styles.nameAndTitle}>
                        <h1 className={styles.name}>{superstar.name}</h1>
                        <h2 className={styles.title}>{superstar.title}</h2>
                    </div>
                    <div className={styles.championships}>
                        {/* Map through championships if available */}
                        {/* {superstar.championships?.map((championship, index) => (
                            <div key={index} className={styles.championship}>
                                <img src={championship.img_url} alt={championship.name} className={styles.championshipImg} />
                                <span>{championship.name}</span>
                            </div>
                        ))} */}
                    </div>
                    <button onClick={toggleStats} className={styles.statsButton}>Superstar Stats</button>
                </div>
                {isStatsOpen && (
                    <SuperstarStats superstar={superstar} />
                )}
            </div>
        </div>
    );
}