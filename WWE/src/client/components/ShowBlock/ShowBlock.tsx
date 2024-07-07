import { useNavigate } from 'react-router-dom';
import Brand from '../../types/brand';
import styles from './ShowBlock.module.scss';

interface ShowBlockProps {
    brand: Brand;
}

export default function ShowBlock({ brand }: ShowBlockProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(brand.name);
        if (brand.name === 'Raw') {
            navigate('/shows/raw');
        } else if (brand.name === 'Smackdown') {
            navigate('/shows/smackdown');
        }
    };
    
    return (
        <div key={brand.id} className={styles.brandDiv} onClick={handleClick}>
            <img className={styles.headerImg} src={brand.brand_header} alt={`${brand.name} header`} />
            <img className={styles.brandImg} src={brand.img_url} alt={brand.name} />
            {brand.name === 'Raw' ? (
                <p className={styles.showInfo}>
                    Mondays at 8/7 C on <span className={styles.usaNetwork}></span>
                </p>
            ) : brand.name === 'Smackdown' ? (
                <p className={styles.showInfo}>
                    Fridays at 8/7 C on <span className={styles.foxNetwork}></span>
                </p>
            ) : null}
        </div>
    );
}