import React from "react";

function AddImage({ productData, setProductData }) {
  // Ensure mainImage is always an array
  const images = productData.mainImage || [];

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      const updatedImages = [...images];
      updatedImages[index] = { file, preview: previewUrl }; // ✅ store both

      setProductData({
        ...productData,
        mainImage: updatedImages,
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center sm:text-left">
        Upload Main Images
      </h2>

      {/* Responsive grid → 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center cursor-pointer hover:border-green-500 transition h-48 sm:h-56 lg:h-64"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, i)}
              className="hidden"
              id={`mainImage-${i}`}
            />
            <label
              htmlFor={`mainImage-${i}`}
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer overflow-hidden"
            >
              {images[i]?.preview ? (
                <img
                  src={images[i].preview}
                  alt={`Main Product ${i + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow"
                />
              ) : (
                <span className="text-gray-400 text-sm text-center">
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
