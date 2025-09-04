import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

function AddProductForm({ productData, setProductData }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const renderInput = (label, name, type = "text", placeholder = "", required = false, description = "") => (
    <div className="flex flex-col">
      <label className="font-semibold mb-1 flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
        {description && <AiOutlineInfoCircle className="text-gray-400" title={description} />}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={productData[name] || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
      />
      {description && <span className="text-gray-400 text-sm mt-1">{description}</span>}
    </div>
  );

  const renderTextarea = (label, name, placeholder = "", required = false, description = "") => (
    <div className="flex flex-col">
      <label className="font-semibold mb-1 flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
        {description && <AiOutlineInfoCircle className="text-gray-400" title={description} />}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        value={productData[name] || ""}
        onChange={handleChange}
        className="border p-2 rounded w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
      />
      {description && <span className="text-gray-400 text-sm mt-1">{description}</span>}
    </div>
  );

  return (
    <div className="h-[71vh] overflow-y-auto p-6 bg-white rounded-lg shadow scrollbar-hide space-y-6">
      {/* Example: Title and Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {renderInput("Product Title", "title", "text", "Enter product title", true, "Unique product name")}
        {renderInput("Brand", "brand", "text", "Enter brand name", true, "Manufacturer or brand")}
      </div>

      {/* Description */}
      {renderTextarea("Description", "description", "Write product description", true, "Detailed description for users")}

      {/* Category & Stock */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {renderInput("Category", "category", "text", "Product category", true, "E.g. Electronics, Apparel")}
        {renderInput("Stock", "stock", "number", "Available stock quantity", true, "Number of items in stock")}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Availability *</label>
          <select
            name="availabilityStatus"
            required
            value={productData.availabilityStatus || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            <option value="">Select Availability</option>
            <option value="in_stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
            <option value="pre_order">Pre Order</option>
          </select>
        </div>
      </div>

      {/* Pricing */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {renderInput("Price", "price", "number", "Product price", true)}
        {renderInput("Currency", "currency", "text", "USD", true)}
        {renderInput("Discount %", "discountPercentage", "number", "Optional discount")}
      </div>

      {/* Product Attributes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {renderInput("Color", "color", "text", "Product color")}
        {renderInput("Material Type", "materialType", "text", "Material composition")}
      </div>

      {/* Weight & Dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {renderInput("Weight (kg)", "weight", "number")}
        {renderInput("Dimensions", "dimensions", "text", '{"w":10,"h":20}', false, "JSON format")}
        {renderInput("Origin Country", "originCountry", "text")}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {renderInput("Manufacture Date", "manufactureDate", "date")}
        {renderInput("Expiry Date", "expiryDate", "date")}
      </div>

      {/* Policies */}
      {renderTextarea("Warranty Information", "warrantyInformation")}
      {renderTextarea("Return Policy", "returnPolicy")}
      {renderTextarea("Shipping Information", "shippingInformation")}

      {/* Extra Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {renderInput("Minimum Order Qty", "minimumOrderQuantity", "number")}
        {renderInput("Max Order Qty", "maxOrderQuantity", "number")}
        {renderInput("Bulk Discount %", "bulkDiscountPercentage", "number")}
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col sm:flex-row gap-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="subscriptionAvailable"
            checked={productData.subscriptionAvailable || false}
            onChange={handleChange}
          />
          Subscription Available
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFragile"
            checked={productData.isFragile || false}
            onChange={handleChange}
          />
          Fragile Item
        </label>
      </div>

      {/* Tags & Meta */}
      {renderInput("Tags", "tags", "text", "Comma separated tags")}
      {renderTextarea("Meta Data", "meta", "JSON format")}
    </div>
  );
}

export default AddProductForm;
