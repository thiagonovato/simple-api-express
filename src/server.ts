import express from 'express'
import { clientRoutes } from './routes/client.routes'
import { productRoutes } from './routes/product.routes'

const app = express()

app.use(express.json())

app.use(clientRoutes, productRoutes)

app.listen(8080, () => { console.log('Server is running on port 8080') })