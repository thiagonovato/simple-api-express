import express from 'express'
import { clientRoutes } from './routes/client.routes'
import { orderRoutes } from './routes/order.router'
import { productRoutes } from './routes/product.routes'

const app = express()

app.use(express.json())
app.use('/api', clientRoutes, productRoutes, orderRoutes)

app.listen(8080, () => { console.log('Server is running on port 8080') })