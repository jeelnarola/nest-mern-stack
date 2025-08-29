import express from 'express'
import { addProduct, getAllProducts,singleProduct } from '../../controllers/products/productController.js'
import upload from '../../middlewares/upload.js'
export const productRoute = express.Router()

// const upload = multer({ dest: 'uploads/' })



productRoute.get("/show",getAllProducts)
productRoute.post("/add",upload.array('images',5),addProduct);
productRoute.get('/:id',singleProduct)

