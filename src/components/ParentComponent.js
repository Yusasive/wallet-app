// Parent component where you fetch notifications
import React, { useState, useEffect } from 'react';
import Notifications from './Notifications';
import { Circle } from '@circle-fin/w3s-pw-web-sdk';

function ParentComponent() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    const circle = new Circle({ apiKey: 'YOUR_API_KEY' });
    const fetchNotifications = async () => {
      try {
        const userToken = 'USER_AUTHENTICATION_TOKEN';

        const notifications = await circle.fetchNotifications(userToken);
        
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
