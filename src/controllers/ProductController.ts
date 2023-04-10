import { Request, Response, NextFunction } from "express";
import productService from "../services/ProductService";


async function registerProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const newProduct = productService.registerNewProduct(req.body)

        res.status(201).send(newProduct)
    } catch (error) {
        next(error)
    }
}

async function deleteProduct(req: Request, res: Response, next: NextFunction) {
    const productId = req.body.id

    try {
        await productService.deleteProduct(productId)

        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}

async function updateProduct(req: Request, res: Response, next: NextFunction) {
    const productId = req.body.id
    const newStock = req.body
    try {
        const updatedProduct = productService.stockUpdate(newStock, productId)

        res.status(200).send(updatedProduct)
    } catch (error) {
        next(error)
    }
}

async function listAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
        const allProducts = await productService.getProductList()
        res.send(allProducts)
    } catch (error) {
        next(error)
    }
}

export default {
    registerProduct,
    deleteProduct,
    updateProduct,
    listAllProducts
}