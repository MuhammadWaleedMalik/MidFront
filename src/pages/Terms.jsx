import React, { useState } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">
          Terms & Conditions
        </h1>
        <div className="max-h-60 overflow-y-auto border border-gray-600 p-4 rounded-lg bg-gray-700">
          <h2 className="text-xl font-semibold text-white mb-2">
            1. Subscription & Payment
          </h2>
          <p className="text-gray-300 text-sm">
            - Mid Trip is a paid AI image generation service.  
            - Users must subscribe to a plan before accessing full features.  
            - Payments are processed securely, and refunds are not guaranteed.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">
            2. Usage & Copyright
          </h2>
          <p className="text-gray-300 text-sm">
            - AI-generated images belong to the user, but Mid Trip retains the right to showcase them for promotional purposes.  
            - Reselling generated images as standalone NFTs or artworks is prohibited without explicit permission.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-300 text-sm">
            - Users must not generate or request inappropriate, illegal, or harmful content.  
            - Any violation may result in account suspension without refund.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">
            4. Service Limitations
          </h2>
          <p className="text-gray-300 text-sm">
            - AI-generated results may not always be accurate or of expected quality.  
            - The service may experience downtime due to updates or maintenance.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">
            5. Cancellation & Refunds
          </h2>
          <p className="text-gray-300 text-sm">
            - Users can cancel subscriptions anytime, but refunds are only provided for technical failures.  
            - Refund requests must be submitted within 7 days of purchase.  
          </p>
        </div>

        {/* Agreement Checkbox */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="agree"
            className="w-5 h-5 text-blue-500 mr-2 cursor-pointer"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          <label htmlFor="agree" className="text-gray-300 text-sm cursor-pointer">
            I have read and agree to the Terms & Conditions
          </label>
        </div>

      
          </div>
    </div>
  );
};

export default Terms;
