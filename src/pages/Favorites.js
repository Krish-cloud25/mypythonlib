// src/pages/Favorites.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Favorites = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Favorites
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is the page where you can view all your favorite books and authors.
      </Typography>
    </Container>
  );
};

export default Favorites;
