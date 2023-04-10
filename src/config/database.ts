import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

const connectionDb = {
    connectionString: process.env.DATABASE_URL,
}

const database = new Pool (connectionDb)

export default database