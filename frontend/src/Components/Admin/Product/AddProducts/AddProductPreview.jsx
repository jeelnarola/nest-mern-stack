import React from "react";

function AddProductPreview({ productData }) {
  // console.log(productData.mainImage[0]);

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Preview Product</h2>
      {productData.image && productData.image.length > 0 ? (
        productData.image.map((img, i) => (
          <img
            key={i}
            src={img.preview || URL.createObjectURL(img.file)}
            alt={`Preview ${i}`}
            className="w-32 h-32 object-cover rounded-lg shadow"
          />
        ))
      ) : (
        <p className="text-gray-500">No images uploaded</p>
      )}

      <p><strong>Name:</strong> {productData.name}</p>
      <p><strong>Description:</strong> {productData.description}</p>
      <p><strong>Price:</strong> ${productData.price}</p>
    </div>
  );
}

export default AddProductPreview;
