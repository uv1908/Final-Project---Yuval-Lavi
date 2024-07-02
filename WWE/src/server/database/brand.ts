import { RowDataPacket } from "mysql2";

interface Brand extends RowDataPacket {
    id: number;
    name: string;
    img_url: string;
    brand_header?: string;
}

export default Brand;