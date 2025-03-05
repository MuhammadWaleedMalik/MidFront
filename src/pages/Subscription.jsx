import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SubscriptionPage = () => {
  const { plan } = useParams();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [country, setCountry] = useState('');

  const handlePayment = () => {
    alert(`Payment for ${plan} plan processed!`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">{plan} Plan Subscription</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;
