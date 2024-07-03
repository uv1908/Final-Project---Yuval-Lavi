import Superstar from "../../types/superstar";
import styles from "../SuperstarBlock/SuperstarBlock.module.scss";

interface ChampionBlockProps {
    superstar: Superstar;
}

export default function ChampionBlock({ superstar }: ChampionBlockProps) {
    let title = "";
    if(superstar.title != "") {
        title = superstar.title.slice(0, -4);
    }

    return (
        <div key={superstar.id} className={styles.superstarDiv}>
            <img src={superstar.img_url} alt={superstar.name} />
            <div className={`${styles.superstarInfo} ${styles.champsInfo}`}>
                {superstar.name}
                <p>{title}</p>
            </div>
        </div>
    )
}
