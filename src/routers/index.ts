import ProductsRouter from "./ProductRouter";
import { Router } from "express";

const router = Router()

router.use("/products", ProductsRouter)

export default router