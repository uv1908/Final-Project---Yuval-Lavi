import { RowDataPacket } from "mysql2";

interface Superstar extends RowDataPacket {
    id: number;
    name: string;
    height: string;
    weight: string;
    hometown: string;
    signature_move: string;
    career_highlights: string;
    img_url: string;
    title: string;
    brand_id: number;
}

export default Superstar;