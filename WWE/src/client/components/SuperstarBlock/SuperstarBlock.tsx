import Superstar from "../../types/superstar";
import styles from "./SuperstarBlock.module.scss";

interface SuperstarBlockProps {
    superstar: Superstar;
    onClick: () => void;
}

export default function SuperstarBlock({ superstar, onClick }: SuperstarBlockProps) {
    return (
        <div key={superstar.id} className={styles.superstarDiv} onClick={onClick} >
            <img src={superstar.img_url} alt={superstar.name} />
            <div className={styles.superstarInfo}>
                {superstar.name}
            </div>
        </div>
    )
}