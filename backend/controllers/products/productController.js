import Product from "../../models/product/productModel.js";
import cloudinary from "../../utils/cloudinary.js";
import fs from "fs";

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "products", // folder in Cloudinary
//     allowed_formats: ["jpg", "png", "jpeg", "webp"],
//   },
// });

// export const upload = multer({ storage });

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ message: "successfully product get.", data: products }); // ✅ only show products
  } catch (error) {
    console.log("Error in getAllProducts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      stock,
      currency,
      discountPercentage,
      weight,
      dimensions, // { width, height, depth } as JSON
      color,
      usageInstructions,
      safetyInformation,
      expiryDate,
      originCountry,
      materialType,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      returnPolicy,
      minimumOrderQuantity,
      maxOrderQuantity,
      bulkDiscountPercentage,
      subscriptionAvailable,
      hsnCode,
      manufactureDate,
      isFragile,
      brand,
      tags,
      meta, // { barcode, qrCode, keywords, slogan, videoUrl }
    } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "At least one file is required" });
    }

    const uploadPromises = req.files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "nest/products",
        resource_type: "auto", // detects image or video
      });
      fs.unlinkSync(file.path); // delete local temp file
      return result.secure_url;
    });

    const urls = await Promise.all(uploadPromises);
    const product = new Product({
      title,
      description,
      category,
      price,
      stock,
      currency,
      discountPercentage,
      weight,
      dimensions: dimensions ? JSON.parse(dimensions) : undefined,
      color,
      usageInstructions,
      safetyInformation,
      expiryDate,
      originCountry,
      materialType,
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      returnPolicy,
      minimumOrderQuantity,
      maxOrderQuantity,
      bulkDiscountPercentage,
      subscriptionAvailable,
      hsnCode,
      manufactureDate,
      isFragile,
      brand,
      tags: tags ? JSON.parse(tags) : [],
      meta: meta ? JSON.parse(meta) : {},
      images: urls, // all uploaded files
      thumbnail: urls[0], // first image/video as thumbnail
      createdBy: req.user._id, // assuming auth middleware
    });
    await product.save();

    res.status(201).json({ message: "Product created", data: product });
  } catch (err) {
    console.log("Error in Add Products:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).exec();
     if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ data:product });
    } catch (error) {
    console.log("Error in Single Product:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteProduct = async (req,res)=>{
  try {
      const { ids } = req.body; 
       if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({ message: "Please provide an array of IDs" });
    }
    const result = await Product.deleteMany({ _id: { $in: ids } });
    res.json({ message: `${result.deletedCount} products deleted successfully` });
  } catch (error) {
     console.log("Error in Delete Products:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}



