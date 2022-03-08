import { Request, Response, Router } from 'express'
import orderService from '../services/OrderService'

const orderRoutes = Router()

orderRoutes.post('/order', async (request: Request, response: Response) => {
  try {
    const { products, clientId, status } = request.body

    const orderId = orderService.nextId()

    const order = { orderId, products, clientId, status }

    await orderService.add(order)

    return response.status(201).json(order)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }

})

orderRoutes.get('/order', (request: Request, response: Response) => {
  const orders = orderService.list()

  return response.status(201).json(orders)

})

export { orderRoutes }