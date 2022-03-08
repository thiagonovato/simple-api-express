import { Product } from "./product";

export interface Order {
  orderId: number;
  clientId: number;
  products: Array<Product>;
  status: string;
}