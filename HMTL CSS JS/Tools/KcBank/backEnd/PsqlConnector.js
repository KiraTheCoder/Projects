// https://console.neon.tech/

import postgres from 'postgres';
import dotenv from 'dotenv'
dotenv.config();
const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

// async function getPostgresVersion() {
//     const response = await sql`SELECT * from  customers`;
//     console.log(response);
// }

// getPostgresVersion();

export default sql;
