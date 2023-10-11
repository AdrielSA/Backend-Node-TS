import 'dotenv/config'
import express from 'express'
import { router } from './routes/document.route'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`Backend running on port: ${port}`))