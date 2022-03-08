import { Request, Response, Router } from 'express'
import productService from '../services/ProductService'

const productRoutes = Router()

productRoutes.post('/product', (request: Request, response: Response) => {
  const { productId, isActive, currentQuantity } = request.body

  const product = { productId, isActive, currentQuantity }
  productService.add(product)

  return response.status(201).json(product)

})

productRoutes.get('/product', (request: Request, response: Response) => {
  const products = productService.list()

  return response.status(201).json(products)

})

export { productRoutes }