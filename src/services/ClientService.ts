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

  nextId(): number {
    return clients.length + 1
  }
}

export default new ClientService();