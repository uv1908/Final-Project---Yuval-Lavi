import rawHeader from '../../assets/raw_header.png';
import RawNews from '../../components/RawNews/RawNews';
import styles from './Raw.module.scss';

export default function Raw() {
    return (
        <>
            <img className={styles.headerImg} src={rawHeader} alt='Raw header' />
            <RawNews />
        </>
    );
}