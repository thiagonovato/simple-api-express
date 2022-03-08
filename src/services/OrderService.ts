import { Order } from "../interfaces/order";
import clientService from "./ClientService";
import productService from "./ProductService"

let orders: Order[] = []

class OrderService {

  async add({ orderId, products, clientId }: Order): Promise<Order> {
    const client = clientService.findById(clientId)
    // if (!client) throw new Error("client-not-found");

    if (products.length === 0) throw new Error("products-not-found");

    for await (const i of products) {
      const isAvailable = productService.productAvailable(i.productId, i.quantity)
      if (!isAvailable) throw new Error(`product-not-available: id: ${i.productId}`);
    }

    const order = { orderId, products, clientId, status: "pending" }
    orders.push(order)

    return order
  }

  list(): Order[] {
    return orders
  }

  nextId(): number {
    return orders.length + 1
  }
}

export default new OrderService();