import React, { useState, useEffect } from 'react';
import { Circle } from '@circle-fin/w3s-pw-web-sdk';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
   
    const circle = new Circle({ apiKey: 'YOUR_API_KEY' });

    const fetchContacts = async () => {
      try {
        const userToken = 'USER_AUTHENTICATION_TOKEN';

        const fetchedContacts = await circle.fetchContacts(userToken);
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
