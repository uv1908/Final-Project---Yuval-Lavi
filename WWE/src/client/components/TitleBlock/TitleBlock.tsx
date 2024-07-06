import Title from '../../types/title';
import styles from './TitleBlock.module.scss';

interface TitleBlockProps {
    title: Title;
}

export default function TitleBlock({ title }: TitleBlockProps) {
    return (
        <div key={title.id} className={styles.titleDiv}>
            <img src={title.img_url} alt={title.name} />
            <h2>{title.name}</h2>
            <p>{title.years_active}</p>
        </div>
    );
}