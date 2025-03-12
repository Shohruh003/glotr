import { makeAutoObservable } from 'mobx';
import rootService from '../services/RootService';
import { IProduct } from '../types/types';

class ProductStore {
    private _products: IProduct[] = [];
    private _loading = false;

    readonly productService = rootService.productService;


    constructor() {
        makeAutoObservable(this);
    }
    
    set products(products: IProduct[]) {
        this._products = products;
    }

    set loading(loading: boolean) {
        this._loading = loading;
    }

    get products() {
        return this._products;
    }

    get loading() {
        return this._loading;
    }

    // Запрос для получения продуктов
    async fetchProducts() {
        this.loading = true;
        
        return Promise.resolve(this.productService.getProducts())
        .then((data: IProduct[]) => {
            this.products = data;
        })
        .catch((error) => {
        console.error('Error fetching products:', error);
        })
        .finally(() => {
            this.loading = false;
        });
    }
}

export default new ProductStore();
