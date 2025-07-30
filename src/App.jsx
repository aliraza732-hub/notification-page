import React, { useState } from 'react';
import Header from './components/Header';
import NotificationList from './components/NotificationList';
import notificationsData from '../src/data/notifications';

const App = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  console.log(notifications)

  const handleMarkAllAsRead = () => {
    const updated = notifications.map((item) => ({
     
      ...item,
      isRead: true,
    }));
    setNotifications(updated);
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  console.log({unreadCount})

  return (
    <div style={{maxWidth: '800px', margin: '20px auto', padding: '20px'}}>
      <Header unreadCount={unreadCount} onMarkAllAsRead={handleMarkAllAsRead} />
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default App;
