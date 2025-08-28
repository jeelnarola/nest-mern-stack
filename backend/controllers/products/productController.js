import Product from "../../models/product/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({createdAt: -1})
    res.status(200).json({"message":"successfully product get.",data:products}); // ✅ only show products
  } catch (error) {
    console.log("Error in getAllProducts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
