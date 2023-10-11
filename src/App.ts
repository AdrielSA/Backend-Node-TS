import 'dotenv/config'
import express from 'express'
import path from 'path'
import { router } from './routes/document.route'
import dbConnection from './config/mongo'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(router)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

dbConnection().then(() => console.log('DbConnection ready.'))

app.listen(port, () => console.log(`Backend running on port: ${port}`))