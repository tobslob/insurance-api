import { Product } from '../type/product.interface';
import productsData from '../data/products.json';
export class ProductsService {
  private products: Product[] = productsData;

  findById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
