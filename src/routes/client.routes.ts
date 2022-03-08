import { Request, Response, Router } from 'express'
import clientService from '../services/ClientService'

const clientRoutes = Router()

clientRoutes.post('/clients', (request: Request, response: Response) => {
  const { name } = request.body

  const clientId = clientService.nextId()

  const client = { clientId, name }
  clientService.add(client)

  return response.status(201).json(client)

})

clientRoutes.get('/clients', (request: Request, response: Response) => {
  const clients = clientService.list()

  return response.status(201).json(clients)

})

export { clientRoutes }