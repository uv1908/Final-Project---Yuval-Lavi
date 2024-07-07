import { useState, useEffect } from 'react';
import Title from '../../../server/database/title';
import styles from './Titles.module.scss';
import TitleBlock from '../TitleBlock/TitleBlock';
import { Link } from 'react-router-dom';

export default function Titles() {
    const [titles, setTitles] = useState<Title[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const titlesResponse = await fetch('/api/titles/');

                if (!titlesResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const titlesData = await titlesResponse.json();

                if (titlesData && Array.isArray(titlesData.titles)) {
                    setTitles(titlesData.titles);
                } else {
                    throw new Error('Titles data is not an array');
                }
            } catch (err) {
                console.log('Failed to fetch data' + err);
            }
        }

        fetchData();
    }, []);
    
    return (
        <div className={styles.titlesDiv}>
            <div className={styles.header}>
                <h4>WWE</h4>
                <h1>CHAMPIONSHIPS</h1>
            </div>
            <div className={styles.display}>
                {titles.map(title =>
                    <Link to={`/Titles/${title.id}`}>
                        <TitleBlock key={title.id} title={title} />
                    </Link>
                )}
            </div>
        </div>
    );
}