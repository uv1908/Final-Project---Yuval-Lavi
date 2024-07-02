import smackdownHeader from '../../assets/smackdown_header.png';
import styles from './Smackdown.module.scss';
import SmackdownNews from '../../components/SmackdownNews/SmackdownNews';

export default function Smackdown() {
    return (
        <>
            <img className={styles.headerImg} src={smackdownHeader} alt='smackdown header' />
            <SmackdownNews />
        </>
    );
}