import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Badge,
  Divider,
  Stack,
} from "@mui/material";

const NotificationCard = ({
  avatar,
  sender,
  action,
  postTitle,
  groupName,
  message,
  imagePreview,
  timestamp,
  isRead = false,
}) => {
  return (
    <Card
      sx={{
        bgcolor: isRead ? "background.paper" : "#f5fafd",
        boxShadow: 0,
        borderRadius: 2,
        p: 1,
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
        <Avatar alt={sender} src={avatar} />

        <Box>
          <Typography variant="body2" color="text.primary">
            <strong>{sender}</strong> {action}
            {(postTitle || groupName) && (
              <strong style={{ color: "#0b4e91" }}>
                “{postTitle || groupName}”
                {!isRead && (
                  <Badge
                    color="error"
                    variant="dot"
                    sx={{ ml: 1, verticalAlign: "middle" }}
                  />
                )}
              </strong>
            )}
          </Typography>

          {message && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {message}
            </Typography>
          )}

          {imagePreview && (
            <Box mt={1}>
              <img
                src={imagePreview}
                alt="preview"
                style={{ width: "100px", height: "auto", borderRadius: "4px" }}
              />
            </Box>
          )}

          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
            {timestamp}
          </Typography>
        </Box>
      </CardContent>

      <Divider />
    </Card>
  );
};

export default NotificationCard;
