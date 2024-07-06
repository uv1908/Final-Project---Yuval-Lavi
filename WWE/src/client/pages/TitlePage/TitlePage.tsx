import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../types/title';
import styles from './TitlePage.module.scss';
import TitleHistory from '../../components/TitleHistory/TitleHistory';
import Titles from '../../components/Titles/Titles';

export default function TitlePage() {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<Title | null>(null);

    useEffect(() => {
        async function fetchTitleDetails() {
            try {
                const response = await fetch(`/api/titles/title-history/${id}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch title details');
                }

                const data = await response.json();
                setTitle(data[0]);
            } catch (err) {
                console.error('Error fetching title:', err);
            }
        }

        fetchTitleDetails();
    }, [id]);

    function renderParagraph(id: number) {
        switch (id) {
            case 1:
                return <div className={styles.titleParagraph}>
                            <p>The Undisputed WWE Championship is widely recognized as the most historic championship in WWE.</p>
                            <p>Dating back to 1963, the WWE Championship was first awarded to Buddy Rogers after he defeated Antonino Rocca in the finals of a tournament in April. Since that time, the biggest names in the business have held the title, including Bruno Sammartino, Andre the Giant, Bret Hart, The Rock and "Stone Cold" Steve Austin.</p>
                        </div>
            case 2:
                return <div className={styles.titleParagraph}>
                            <p>The new World Heavyweight Championship was announced by Triple H heading into the 2023 WWE Draft. A tournament was held to crown the new champion culminating with Seth "Freakin" Rollins defeating AJ Styles at WWE Night of Champions 2023.</p>
                            <p>The title was designed with unique features that include Three Lions to symbolize the McMahon Family crest, a Crown to pay homage to Bruno Samartino, an Eagle as a callback to the original Winged Eagle design of the WWE Championship, diamonds, filagree and rope trim.</p>
                        </div>
            case 3:
                return <div className={styles.titleParagraph}>
                            <p>With the Women's Championship heading to Raw in the wake of the Brand Extension Draft, Shane McMahon and Daniel Bryan introduced the SmackDown Women's Championship for the blue brand with the first champion being crowned at WWE Backlash on Sept. 11, 2016.</p>
                            <p>On the June 12, 2023 edition of Raw, the title was renamed to the Women's World Championship.</p>
                        </div>
            default:
                return null;
        }
    };

    if (!title) {
        return <p>Title not found</p>;
    }

    return (
        <>
            <div>
                <div className={styles.upperDiv}>
                    <img src={title.header_url} alt={title.name} className={styles.headerImage} />
                    <h1 className={styles.titleName}>{title.name}</h1>
                </div>
                <div className={styles.bottomDiv}>
                    <img src={title.current_holder_img} alt={title.current_holder_name} className={styles.superstarImage} />
                    <div className={styles.holderDetails}>
                        <p>Championship Holder</p>
                        <h2>{title.current_holder_name}</h2>
                    </div>
                    <div className={styles.separate}></div>
                    <div className={styles.timeHeld}>
                        <p>Time Held</p>
                        <h3>{title.days_held} DAYS</h3>
                    </div>
                </div>
            </div>
            <br />
            <Titles />
            <br />
            {renderParagraph(title.id)}
            <TitleHistory titleId={title.id}/>
        </>
    );
}
