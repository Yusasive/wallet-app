import React, { useState } from 'react';
import { Circle } from '@circle-fin/w3s-pw-web-sdk';

function WalletTransfers() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();

    const circle = new Circle({ apiKey: 'YOUR_API_KEY' });

    try {
      const userToken = 'USER_AUTHENTICATION_TOKEN';

      const transferResult = await circle.transfer(userToken, recipient, amount);
      
      console.log('Transfer result:', transferResult);
  
    } catch (error) {
      console.error('Error transferring tokens:', error);

    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Wallet Transfers</h2>
      <form onSubmit={handleTransfer}>
        <div className="mb-4">
          <label htmlFor="recipient" className="block text-gray-700 font-bold mb-2">Recipient Wallet Address</label>
          <input
            type="text"
            id="recipient"
            className="border rounded-md px-3 py-2 w-full"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount to Transfer</label>
          <input
            type="number"
            id="amount"
            className="border rounded-md px-3 py-2 w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Transfer
        </button>
      </form>
    </div>
  );
}

export default WalletTransfers;
