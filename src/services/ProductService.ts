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

  productAvailable(productId: number, currentQuantity: number): boolean {
    const product = products.find(product => product.productId === productId)
    if (!product) throw new Error("product-not-found");

    return product.currentQuantity >= currentQuantity
  }
}

export default new ProductService();