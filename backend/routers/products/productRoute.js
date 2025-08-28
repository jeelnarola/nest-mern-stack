import express from 'express'
import { getAllProducts } from '../../controllers/products/productController.js'
export const productRoute = express.Router()

productRoute.get("/show",getAllProducts)

