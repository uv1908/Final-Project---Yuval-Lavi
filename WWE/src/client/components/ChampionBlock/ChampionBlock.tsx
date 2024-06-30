import Superstar from "../../types/superstar";
import styles from "../SuperstarBlock/SuperstarBlock.module.scss";

interface ChampionBlockProps {
    superstar: Superstar;
    onClick: () => void;
}

export default function ChampionBlock({ superstar, onClick }: ChampionBlockProps) {
    let title = "";
    if(superstar.title != "") {
        title = superstar.title.slice(0, -4);
    }

    return (
        <div key={superstar.id} className={styles.superstarDiv} onClick={onClick}>
            <img src={superstar.img_url} alt={superstar.name} />
            <div className={`${styles.superstarInfo} ${styles.champsInfo}`}>
                {superstar.name}
                <p>{title}</p>
            </div>
        </div>
    )
}
