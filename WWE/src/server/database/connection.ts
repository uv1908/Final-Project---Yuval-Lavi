import ViteExpress from "vite-express";
import mysql from "mysql2/promise";

const { env } = await ViteExpress.getViteConfig();
const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "wwe",
    user: "root",
    password: env.VITE_MYSQLPASSWORD,
});

export default pool;