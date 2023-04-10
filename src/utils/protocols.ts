export type Product = {
    id: number,
    name: string,
    description: string,
    stock: number
    price: number
}

export type RegisterProductData = Omit<Product, "id">