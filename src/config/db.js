import mysql from 'mysql2/promise'
import 'dotenv/config'

const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

pool.getConnection()
.then(conn=>{
    console.log("✅ Connected to MySQL Database!")
    conn.release()
})
.catch(err=>{
    console.log("❌ Database Connection Failed:", err)
})

export default pool