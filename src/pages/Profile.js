// src/pages/Profile.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Profile = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Profile
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is the profile page where you can view and edit your personal details.
      </Typography>
    </Container>
  );
};

export default Profile;
