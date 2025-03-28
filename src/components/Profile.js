// src/components/Profile.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Typography, Box, Paper } from '@mui/material';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Typography variant="h6">Please log in to view your profile.</Typography>;
  }

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', width: 400 }}>
        <Avatar
          src={user.picture}
          alt={user.name}
          sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body1" sx={{ color: 'gray' }}>
          {user.email}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
