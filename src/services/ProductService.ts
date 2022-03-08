import { Product } from "../interfaces/product";

let products: Product[] = []

class ProductService {

  add({ productId, isActive, currentQuantity }: Product): Product {
    const product = { productId, isActive, currentQuantity }
    products.push(product)

    return product
  }

  list(): Product[] {
    return products
  }

  nextId(): number {
    return products.length + 1
  }
}

export default new ProductService();