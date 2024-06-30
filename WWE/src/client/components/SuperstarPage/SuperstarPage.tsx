import Superstar from "../../types/superstar";
import Brand from "../../types/brand";
import SuperstarStats from "../SuperstarStats/SuperstarStats";
import styles from "./SuperstarPage.module.scss";

interface SuperstarPageProps {
    superstar: Superstar;
    brand: Brand;
    onClose: () => void;
}

export default function SuperstarPage({ superstar, brand, onClose }: SuperstarPageProps) {
    return (
        <div className={styles.overlay}>
            <div key={superstar.id} className={styles.superstarDiv}>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
                <img src={superstar.img_url} alt={superstar.name} />
                <div className={styles.basicInfo}>
                    <img src={brand.img_url} alt={brand.name} />
                    <h1>{superstar.name}</h1>
                    <h2>{superstar.title}</h2>
                </div>
                <SuperstarStats />
            </div>
        </div>
    );
}