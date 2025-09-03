import React from "react";

function AddImage({ productData, setProductData }) {
  // Ensure mainImage is always an array
  const images = productData.mainImage || [];

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = file; // replace/add at specific slot
      setProductData({
        ...productData,
        mainImage: updatedImages,
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Upload Main Images</h2>
      <div className="grid grid-cols-4 gap-6 h-92">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className=" border-2 border-dashed border-gray-300 rounded-lg p-4  items-center justify-center cursor-pointer hover:border-green-500 transition"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, i)}
              className="hidden h-92"
              id={`mainImage-${i}`}
            />
            <label
              htmlFor={`mainImage-${i}`}
              className="flex flex-col items-center justify-center w-full  cursor-pointer h-92 overflow-hidden"
            >
              {images[i] ? (
                <img
                  src={URL.createObjectURL(images[i])}
                  alt={`Main Product ${i + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              ) : (
                <span className="text-gray-400 text-sm">
                  + Upload Image {i + 1}
                </span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddImage;
