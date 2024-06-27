import Superstar from "../../types/superstar";
import styles from "./SuperstarBlock.module.scss";

interface SuperstarBlockProps {
    superstar: Superstar;
    // handleOnClick: () => void;
}

export default function SuperstarBlock({ superstar }: SuperstarBlockProps) {
    return (
        <div key={superstar.id} className={styles.superstarDiv}>
            <img src={superstar.img_url} alt={superstar.name} />
            <h4>{superstar.name}</h4>
        </div>
    )
}
