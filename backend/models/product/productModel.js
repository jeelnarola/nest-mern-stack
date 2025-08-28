import mongoose from 'mongoose'


const dimensionSchema = new mongoose.Schema({
    width: { type: Number, required: true, min: 0 },
    height: { type: Number, required: true, min: 0 },
    depth: { type: Number, required: true, min: 0 },
});

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    reviewerName: { type: String, required: true },
    reviewerEmail: { type: String, required: true, match: /.+\@.+\..+/ },
});

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, default: "No answer yet" },
});


const metaSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    barcode: { type: String },
    qrCode: { type: String },
    keywords: [{ type: String }],
    slogan: { type: String },
    videoUrl: { type: String },
});

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        category: { type: String, required: true, lowercase: true },
        price: { type: Number, required: true, min: 0 },
        currency: { type: String, enum: ["USD", "EUR", "INR"], default: "USD" },
        discountPercentage: { type: Number, min: 0, max: 100 },
        rating: { type: Number, min: 0, max: 5, default: 0 },
        stock: { type: Number, required: true, min: 0 },
        tags: [{ type: String }], // ["beauty", "mascara"],
        brand: { type: String },
        // sku: { type: String, unique: true },
        weight: { type: Number, min: 0 },

        dimensions: dimensionSchema,

        color: { type: String },
        // finishType: { type: String },
        // ingredients: { type: String },
        usageInstructions: { type: String },
        safetyInformation: { type: String },
        expiryDate: { type: Date },
        originCountry: { type: String },
        materialType: { type: String }, // Plastic Tube

        warrantyInformation: { type: String },
        shippingInformation: { type: String },
        availabilityStatus: {
            type: String,
            enum: ["In Stock", "Out of Stock", "Preorder"],
            default: "In Stock",
        },
        returnPolicy: { type: String },

        minimumOrderQuantity: { type: Number, min: 1, default: 1 },
        maxOrderQuantity: { type: Number },
        bulkDiscountPercentage: { type: Number, min: 0, max: 100 },
        subscriptionAvailable: { type: Boolean, default: false },

        hsnCode: { type: String },
        manufactureDate: { type: Date },
        isFragile: { type: Boolean, default: false },

        reviews: [reviewSchema],
        questions: [questionSchema],


        // ADD A WISHLIST PRODUCT COUNT
        // likes: { type: Number, default: 0 },
        // wishlistCount: { type: Number, default: 0 },

        meta: metaSchema,

        images: [{ type: String, required: true }],
        thumbnail: { type: String, required: true },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);



const Product = mongoose.model("Product", productSchema)
export default Product