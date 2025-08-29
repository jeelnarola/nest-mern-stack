import express from 'express'
import { addProduct, deleteProduct, getAllProducts,singleProduct } from '../../controllers/products/productController.js'
import upload from '../../middlewares/upload.js'
export const productRoute = express.Router()

// const upload = multer({ dest: 'uploads/' })


// Show
productRoute.get("/show",getAllProducts)

// Add Only Admin
productRoute.post("/add",upload.array('images',5),addProduct);

// Single Product
productRoute.get('/:id',singleProduct)

// Delete Only Admin
productRoute.delete('/delete',deleteProduct)

// Update Only Admin
