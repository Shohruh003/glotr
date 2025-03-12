interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image?: string;
}

const products: IProduct[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description for product 1',
        image: 'https://www.foodstoreint.co.uk/images/brands2.png',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Description for product 2',
        image: 'https://www.foodstoreint.co.uk/images/brands2.png',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'Description for product 3',
        image: 'https://www.foodstoreint.co.uk/images/brands2.png',
    },
];

export default products;