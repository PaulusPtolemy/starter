import { ApplicationService} from "~/services/core/Application.service"
import { IProduct } from "~/store/products"

export class ProductsService extends ApplicationService {
    getProducts (): Promise<IProduct[]> {
        return this.get('/products')
    }
}
