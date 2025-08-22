import React from 'react'
import { useState } from 'react';

function UserAddress() {
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleEdit = (section) => {
    setActiveSection(section);
    setOpenModal(true);
  };
  return (
    <>
      <div className="flex gap-20 p-10">
      {/* Billing Address */}
      <div className="max-w-sm">
        <h2 className="text-xl font-semibold mb-3">Billing Address</h2>
        <p>3522 Interstate</p>
        <p>75 Business Spur,</p>
        <p>Sault Ste.</p>
        <p>Marie, MI 49783</p>
        <p className="text-gray-500">New York</p>
        <button
          onClick={() => handleEdit("Billing Address")}
          className="text-green-500 mt-2 hover:underline"
        >
          Edit
        </button>
      </div>

      {/* Shipping Address */}
      <div className="max-w-sm">
        <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>
        <p>4299 Express Lane</p>
        <p>Sarasota,</p>
        <p>FL 34249 USA</p>
        <p>Phone: 1.941.227.4444</p>
        <p className="text-gray-500">Sarasota</p>
        <button
          onClick={() => handleEdit("Shipping Address")}
          className="text-green-500 mt-2 hover:underline"
        >
          Edit
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              Edit {activeSection}
            </h3>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Street"
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="State"
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border rounded-lg p-2"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default UserAddress