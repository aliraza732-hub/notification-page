import React from 'react';
import {
  Stack,
  Typography,
  Badge,
  Button,
  Box
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = ({ unreadCount, onMarkAllAsRead }) => {
  return (
    <Box sx={{ px: 2, py: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          
          <Typography variant="h6">You have {unreadCount} notifications</Typography>
          <Badge badgeContent={unreadCount} color="error">
            <NotificationsIcon sx={{ fontSize: 28 }} />
          </Badge>
        </Stack>

        <Button
          onClick={onMarkAllAsRead}
          disabled={unreadCount === 0}
          variant="outlined"
          size="small"
        >
          Mark all as read
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
