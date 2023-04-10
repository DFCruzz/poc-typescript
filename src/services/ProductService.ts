import productsRepository from "../repositories/ProductsRepository";
import { Product, RegisterProductData } from "../utils/protocols";

async function registerNewProduct(productData: RegisterProductData): Promise<Product> {
    const { rowCount: isRegistered } = await productsRepository.getProductByName(productData.name)

    if (isRegistered) throw new Error("Product already registered!")

    const result = await productsRepository.registerProduct(productData)
    const newProduct = result.rows[0];
    return newProduct;
}

async function deleteProduct(id: number): Promise<void> {
    await productsRepository.deleteProductById(id)
}

async function stockUpdate(stock: number, id: number): Promise<Product> {
    const { rowCount: isRegistered } = await productsRepository.getProductById(id)

    if (!isRegistered) throw new Error("Product not found!")

    const result = await productsRepository.updateProductStock(stock, id)
    const updatedProduct = result.rows[0];
    return updatedProduct
}

async function getProductList(): Promise<Product[]> {
    const { rows: allProducts } = await productsRepository.getAllProducts()
    return allProducts
}

export default {
    registerNewProduct,
    deleteProduct,
    stockUpdate,
    getProductList
}