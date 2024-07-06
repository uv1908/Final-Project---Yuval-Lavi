import { RowDataPacket } from "mysql2";

interface Title extends RowDataPacket {
    id: number;
    name: string;
    img_url: string;
    current_holder: number;
    years_active: string;
    header_url: string;
}

export default Title;