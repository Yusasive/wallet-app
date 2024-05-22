import React, { useState, useEffect } from 'react';
import { Circle } from '@circle-fin/w3s-pw-web-sdk';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Initialize Circle SDK with your API key
    const circle = new Circle({ apiKey: 'YOUR_API_KEY' });

    // Fetch the user's contacts
    const fetchContacts = async () => {
      try {
        // Authenticate the user (replace with your authentication method)
        const userToken = 'USER_AUTHENTICATION_TOKEN';

        // Call the SDK method to fetch contacts
        const fetchedContacts = await circle.fetchContacts(userToken);

        // Update state with fetched contacts
        setContacts(fetchedContacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>{contact.name} - {contact.walletAddress}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contacts;
