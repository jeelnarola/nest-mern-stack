import React, { useState } from "react";
import ImageForm from "./AddImage";
import AddProductForm from "./AddProductForm"; // ✅ make sure this file exists
import Preview from "./AddProductPreview";

function AddProductIndex() {
  const [activeStep, setActiveStep] = useState("image");

  // shared product data (will be updated by forms)
  const [productData, setProductData] = useState({
    image: null,
    name: "",
    description: "",
    price: "",
  });

  // step navigation handler
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div>
        <ul className="flex">
          <li
            onClick={() => handleStepChange("image")}
            className={`pl-10 cursor-pointer hover:text-green-500 ${
              activeStep === "image" ? "text-green-600 font-bold" : ""
            }`}
          >
            Image
          </li>
          <li
            onClick={() => handleStepChange("details")}
            className={`pl-10 cursor-pointer hover:text-green-500 ${
              activeStep === "details" ? "text-green-600 font-bold" : ""
            }`}
          >
            Product Details
          </li>
          <li
            onClick={() => handleStepChange("preview")}
            className={`pl-10 cursor-pointer hover:text-green-500 ${
              activeStep === "preview" ? "text-green-600 font-bold" : ""
            }`}
          >
            Preview
          </li>
        </ul>
      </div>

      <div className="mt-6">
        {activeStep === "image" && (
          <ImageForm productData={productData} setProductData={setProductData} />
        )}
        {activeStep === "details" && (
          <AddProductForm
            productData={productData}
            setProductData={setProductData}
          />
        )}
        {activeStep === "preview" && <Preview productData={productData} />}
      </div>
    </>
  );
}

export default AddProductIndex;
