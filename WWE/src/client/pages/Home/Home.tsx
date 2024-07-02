import "../../App.css";
import RawNews from '../../components/RawNews/RawNews';
import SmackdownNews from "../../components/SmackdownNews/SmackdownNews";

export default function Home() {
    return (
        <>
            <RawNews />
            <br />
            <br />
            <br />
            <SmackdownNews />
        </>
    )
}