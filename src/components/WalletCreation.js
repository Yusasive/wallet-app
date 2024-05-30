import React, { useState } from 'react';
import { Circle } from '@circle-fin/w3s-pw-web-sdk';

function WalletCreation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateWallet = async (e) => {
    e.preventDefault();

    const circle = new Circle({ apiKey: 'YOUR_API_KEY' });
    
    try {
      const userToken = 'USER_AUTHENTICATION_TOKEN';

      const wallet = await circle.createWallet(userToken, { name, email });
      
      console.log('Wallet created:', wallet);
 
    } catch (error) {
      console.error('Error creating wallet:', error);

    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Create Wallet</h2>
      <form onSubmit={handleCreateWallet}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="border rounded-md px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-md px-3 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Wallet
        </button>
      </form>
    </div>
  );
}

export default WalletCreation;

