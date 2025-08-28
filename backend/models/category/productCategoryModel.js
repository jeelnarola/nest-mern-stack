import mongoose from "mongoose";


const productCategorySchema = new mongoose.Schema({

    categoryName: {
        type:String,
        require:true
    }
},{timestamps:true})

const ProductCategory = mongoose.model("ProductCategory",productCategorySchema)

export default ProductCategory