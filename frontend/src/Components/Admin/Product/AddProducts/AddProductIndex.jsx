import React, { useState } from "react";
import ImageForm from "./AddImage";
import AddProductForm from "./AddProductForm";
import Preview from "./AddProductPreview";
import AddProductPreview from "./AddProductPreview";

function AddProductIndex() {
  const [activeStep, setActiveStep] = useState("image");

  // shared product data (accessible to all steps)
  const [productData, setProductData] = useState({
    image: [],
    name: "",
    description: "",
    price: "",
  });

  const steps = ["image", "details", "preview"];

  // ✅ Step Navigation
  const goNext = () => {
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Step Tabs */}
      <div className="mb-6">
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center">
          {steps.map((step) => (
            <li
              key={step}
              onClick={() => setActiveStep(step)}
              className={`cursor-pointer px-3 py-2 rounded-lg transition ${
                activeStep === step
                  ? "bg-green-500 text-white font-bold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {step === "image"
                ? "Image"
                : step === "details"
                ? "Product Details"
                : "Preview"}
            </li>
          ))}
        </ul>
      </div>

      {/* Render Components */}
      <div className="mt-6">
        {activeStep === "image" && (
          <ImageForm productData={productData} setProductData={setProductData} />
        )}
        {activeStep === "details" && (
          <AddProductForm productData={productData} setProductData={setProductData} />
        )}
        {activeStep === "preview" && <AddProductPreview productData={productData} />}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        {activeStep !== "image" && (
          <button
            onClick={goPrev}
            className="w-full sm:w-auto px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Previous
          </button>
        )}

        {activeStep !== "preview" ? (
          <button
            onClick={goNext}
            className="w-full sm:w-auto ml-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save & Next
          </button>
        ) : (
          <button
            onClick={() => alert("Final Save: " + JSON.stringify(productData))}
            className="w-full sm:w-auto ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default AddProductIndex;
