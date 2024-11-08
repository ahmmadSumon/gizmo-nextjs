"use client"
import { useState } from "react";

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if necessary
    onSubmit(formData);
  };

  return (
    <div className="flex mt-40 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Checkout Form</h2>
        
        {/* Personal Information Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Information</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              maxLength="16"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Expiration Date
              </label>
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                placeholder="MM/YY"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                maxLength="5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                maxLength="3"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
