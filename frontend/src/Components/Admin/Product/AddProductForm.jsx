import { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    currency: "USD",
    discountPercentage: "",
    weight: "",
    dimensions: "",
    color: "",
    usageInstructions: "",
    safetyInformation: "",
    expiryDate: "",
    originCountry: "",
    materialType: "",
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: "",
    maxOrderQuantity: "",
    bulkDiscountPercentage: "",
    subscriptionAvailable: false,
    hsnCode: "",
    manufactureDate: "",
    isFragile: false,
    brand: "",
    tags: "",
    meta: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse JSON fields
    let payload = {
      ...formData,
      dimensions: formData.dimensions ? JSON.parse(formData.dimensions) : undefined,
      tags: formData.tags ? JSON.parse(formData.tags) : [],
      meta: formData.meta ? JSON.parse(formData.meta) : {},
      thumbnail: formData.images[0] || null,
    };

    console.log(payload); // Here you can send to API
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <input
          type="number"
          name="discountPercentage"
          placeholder="Discount Percentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="dimensions"
          placeholder='Dimensions (JSON: {"length":10,"width":5,"height":2})'
          value={formData.dimensions}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="usageInstructions"
          placeholder="Usage Instructions"
          value={formData.usageInstructions}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="safetyInformation"
          placeholder="Safety Information"
          value={formData.safetyInformation}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="originCountry"
          placeholder="Origin Country"
          value={formData.originCountry}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="materialType"
          placeholder="Material Type"
          value={formData.materialType}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="warrantyInformation"
          placeholder="Warranty Information"
          value={formData.warrantyInformation}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="shippingInformation"
          placeholder="Shipping Information"
          value={formData.shippingInformation}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="availabilityStatus"
          placeholder="Availability Status"
          value={formData.availabilityStatus}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="returnPolicy"
          placeholder="Return Policy"
          value={formData.returnPolicy}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minimumOrderQuantity"
          placeholder="Minimum Order Quantity"
          value={formData.minimumOrderQuantity}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="maxOrderQuantity"
          placeholder="Maximum Order Quantity"
          value={formData.maxOrderQuantity}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="bulkDiscountPercentage"
          placeholder="Bulk Discount Percentage"
          value={formData.bulkDiscountPercentage}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="subscriptionAvailable"
            checked={formData.subscriptionAvailable}
            onChange={handleChange}
          />
          Subscription Available
        </label>
        <input
          type="text"
          name="hsnCode"
          placeholder="HSN Code"
          value={formData.hsnCode}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="manufactureDate"
          value={formData.manufactureDate}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFragile"
            checked={formData.isFragile}
            onChange={handleChange}
          />
          Is Fragile
        </label>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="tags"
          placeholder='Tags (JSON: ["tag1","tag2"])'
          value={formData.tags}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="meta"
          placeholder='Meta (JSON: {"key":"value"})'
          value={formData.meta}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="file"
          name="images"
          multiple
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
