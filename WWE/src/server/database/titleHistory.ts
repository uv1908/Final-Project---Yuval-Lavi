import { RowDataPacket } from "mysql2";

interface TitleHistory extends RowDataPacket {
    id: number;
    title_id: number;
    superstar_id: number;
    date_won: Date;
    date_lost: Date;
}

export default TitleHistory;