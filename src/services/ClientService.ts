import { Client } from "../interfaces/clients";

let clients: Client[] = []

class ClientService {

  add({ clientId, name }: Client): Client {
    const client = { clientId, name }
    clients.push(client)

    return client
  }

  list(): Client[] {
    return clients
  }
}

export default new ClientService();