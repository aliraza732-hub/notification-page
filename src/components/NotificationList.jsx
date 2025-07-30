import React, { useState } from 'react';
import { Box, Stack} from '@mui/material';
import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications }) => {
  return (
    <Stack spacing={2}>
      {notifications.map((notif) => (
        <NotificationCard key={notif.id} {...notif} />
      ))}
    </Stack>
  );
};


export default NotificationList;
