import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">Privacy Policy</h1>
        
        <div className="max-h-60 overflow-y-auto border border-gray-600 p-4 rounded-lg bg-gray-700">
          
          <h2 className="text-xl font-semibold text-white mb-2">1. Data Collection</h2>
          <p className="text-gray-300 text-sm">
            - We collect personal information such as name, email, and payment details during account registration.  
            - Usage data, including AI-generated content, may be stored for service improvement.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">2. How We Use Your Data</h2>
          <p className="text-gray-300 text-sm">
            - Your data is used to provide AI image generation services and improve our platform.  
            - We do not sell or share your personal information with third parties for marketing purposes.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">3. Payment Security</h2>
          <p className="text-gray-300 text-sm">
            - All payments are securely processed through encrypted gateways.  
            - We do not store your credit card information on our servers.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">4. User Control & Deletion</h2>
          <p className="text-gray-300 text-sm">
            - Users can request data deletion or account removal by contacting support.  
            - Some data may be retained for legal or operational purposes.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">5. Cookies & Tracking</h2>
          <p className="text-gray-300 text-sm">
            - We use cookies to enhance user experience and track usage patterns.  
            - You can disable cookies in your browser settings, but some features may be limited.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">6. Third-Party Services</h2>
          <p className="text-gray-300 text-sm">
            - We may integrate third-party AI tools or analytics for service improvement.  
            - These services have their own privacy policies that users should review.  
          </p>

          <h2 className="text-xl font-semibold text-white mt-4 mb-2">7. Policy Updates</h2>
          <p className="text-gray-300 text-sm">
            - This Privacy Policy may be updated, and users will be notified of significant changes.  
            - Continued use of Mid Trip after updates indicates acceptance of the new terms.  
          </p>

        </div>

        <p className="mt-4 text-gray-300 text-sm">
          If you have any questions, please contact us at  
          <span className="text-blue-400 font-semibold"> mauzsite@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
