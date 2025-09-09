import React from "react";

// ✅ Import images from assets
import paypalIcon from "../assets/paypal.jpg";
import amexIcon from "../assets/amex.jpg";
import visaIcon from "../assets/visa.jpg";
import mastercardIcon from "../assets/mastercard.jpg";
import pdfImage from "../assets/te.jpg";

// ✅ Import the EducationOffers component
import EducationOffers from "../components/EducationOffers";

const CheckoutPage = () => {
  return (
    <>
      {/* Checkout Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Left - Payment Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3">
          <h2 className="text-xl font-bold mb-2">Checkout</h2>

          {/* Cart Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Cart Type
            </label>
          </div>

          {/* Payment Options */}
          <div className="flex gap-4 mb-6">
            <img src={paypalIcon} alt="PayPal" className="h-10" />
            <img src={amexIcon} alt="American Express" className="h-10" />
            <img src={visaIcon} alt="Visa" className="h-10" />
            <img src={mastercardIcon} alt="Mastercard" className="h-10" />
          </div>

          {/* Card Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name on Card
              </label>
              <input
                type="text"
                placeholder="Enter name on Card"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="Enter Card Number"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>
            </div>

            <button
              className="w-full text-white py-3 rounded-lg font-semibold transition"
              style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
            >
              Confirm Payment
            </button>
          </form>
        </div>

        {/* Right - Summary */}
        <div className="bg-sky-50 shadow-md rounded-lg p-6 w-full md:w-1/3 h-[360px]">
          <h3 className="text-lg mb-4">Summary</h3>

          <div className="flex gap-4 mb-4">
            <img
              src={pdfImage}
              alt="Course"
              className="w-28 h-16 object-cover rounded"
            />
            <div>
              <p className="text-sm font-semibold">
                adipising elit, sed do eiusmod tempor
              </p>
              <p className="text-sm text-gray-500 font-semibold">$24.89</p>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <img
              src={pdfImage}
              alt="Course"
              className="w-28 h-16 object-cover rounded"
            />
            <div>
              <p className="text-sm font-medium">
                sed do eiusmod tempor adipising elit
              </p>
              <p className="text-sm font-semibold text-gray-500">$24.69</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$58.38</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between">
              <span>TAX</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>$58.38</span>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Import Offers Below Checkout */}
      <EducationOffers />
    </>
  );
};

export default CheckoutPage;
