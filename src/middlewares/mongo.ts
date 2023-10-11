import 'dotenv/config'
import { connect } from 'mongoose'

async function dbConnection(): Promise<void> {
    const cnn = <string>process.env.MONGO_DB_CONNECTION
    await connect(cnn)
}

export default dbConnection