import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    marketing: boolean;
}

export default User;