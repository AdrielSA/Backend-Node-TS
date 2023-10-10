import 'dotenv/config'
import express from 'express'

const port = process.env.PORT
const app = express()

app.use(express.json())

app.listen(port, () => console.log(`Backend running on port: ${port}`))