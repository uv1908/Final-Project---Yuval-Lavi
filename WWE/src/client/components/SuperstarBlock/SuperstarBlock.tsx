import Superstar from "../../types/superstar";
import styles from "./SuperstarBlock.module.scss";

interface SuperstarBlockProps {
    superstar: Superstar;
}

export default function SuperstarBlock({ superstar }: SuperstarBlockProps) {
    return (
        <div key={superstar.id} className={styles.superstarDiv} >
            <img src={superstar.img_url} alt={superstar.name} />
            <div className={styles.superstarInfo}>
                {superstar.name}
            </div>
        </div>
    )
}