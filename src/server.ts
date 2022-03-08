import express from 'express'
import { clientRoutes } from './routes/client.routes'

const app = express()

app.use(express.json())

app.use(clientRoutes)

app.listen(8080, () => { console.log('Server is running on port 8080') })