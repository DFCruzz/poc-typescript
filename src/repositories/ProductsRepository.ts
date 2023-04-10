import { Query, QueryResult } from "pg";
import database from "../config/database";
import { Product, RegisterProductData,  } from "../utils/protocols.js";

async function registerProduct(productData: RegisterProductData) : Promise<QueryResult<Product>> {
    return database.query(
        `INSERT INTO products (name, description, stock, price) VALUES ($1, $2, $3, $4) RETURNING id, name, description, stock, price;`, 
        [productData.name, productData.description, productData.stock, productData.price]
    )
}

async function getAllProducts(): Promise<QueryResult<Product>> {
    return database.query(
        `SELECT * FROM products;`
    )
}

async function getProductByName(name: string): Promise<QueryResult<Product>> {
    return database.query(
        `SELECT * FROM products WHERE name = $1;`,
        [name]
    )
}

async function getProductById(id: number): Promise<QueryResult<Product>> {
    return database.query(
        `SELECT * FROM products WHERE id = $1;`,
        [id]
    )
}

async function deleteProductById(id: number) {
    return database.query(
        `DELETE * FROM produts WHERE id = $1;`,
        [id]
    )
}

async function updateProductStock(stock: number, id: number): Promise<QueryResult<Product>> {
    return database.query(
        `UPDATE products SET stock = $1 WHERE id = $2 RETURNING id, name, stock;`,
        [stock, id]
    )
}

export default {
    registerProduct,
    getAllProducts,
    getProductByName,
    getProductById,
    deleteProductById,
    updateProductStock
}