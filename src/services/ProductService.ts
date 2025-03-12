import ApiService from "./ApiService";
import products from "./mock/Products";

class ProductService extends ApiService {
    private static instance: ProductService;

    private constructor() {
        super();
    }

    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }

        return ProductService.instance;
    }

    public async getProducts(): Promise<any> {
        // const response = await this.axiosInstance.get('/products');
        // return Promise.resolve(response.data);
        return Promise.resolve(products);
    }
}

export default ProductService