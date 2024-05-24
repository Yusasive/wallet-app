// Parent component where you fetch notifications
import React, { useState, useEffect } from 'react';
import Notifications from './Notifications';
import { Circle } from '@circle-fin/w3s-pw-web-sdk';

function ParentComponent() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Initialize Circle SDK with your API key
    const circle = new Circle({ apiKey: 'YOUR_API_KEY' });

    // Authenticate the user and fetch notifications
    const fetchNotifications = async () => {
      try {
        // Authenticate the user (replace with your authentication method)
        const userToken = 'USER_AUTHENTICATION_TOKEN';

        // Call the SDK method to fetch notifications
        const notifications = await circle.fetchNotifications(userToken);
        
        // Update state with fetched notifications
        setNotifications(notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <Notifications notifications={notifications} />
    </div>
  );
}

export default ParentComponent;
