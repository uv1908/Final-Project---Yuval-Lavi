import { RowDataPacket } from "mysql2";

interface Brand extends RowDataPacket {
    id: number;
    name: string;
    img_url: string;
}

export default Brand;