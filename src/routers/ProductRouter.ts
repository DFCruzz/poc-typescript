import productController from "../controllers/ProductController";
import { validateBody } from "../middlewares/validateBody";
import { registerSchema, updateSchema } from "../schemas/ProductSchema";
import { Router } from "express";

const ProductsRouter = Router();

ProductsRouter.get("/list", productController.listAllProducts)
ProductsRouter.post("/register", validateBody(registerSchema), productController.registerProduct)
ProductsRouter.delete("/delete", productController.deleteProduct)
ProductsRouter.put("/update", validateBody(updateSchema), productController.updateProduct)

export default ProductsRouter;