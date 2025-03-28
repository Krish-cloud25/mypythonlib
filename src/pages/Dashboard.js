import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/books/')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const totalBooks = books.length;
  const averageRating = totalBooks
    ? (books.reduce((acc, book) => acc + parseFloat(book.rating), 0) / totalBooks).toFixed(2)
    : 0;

  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">📚 Total Books</Typography>
            <Typography variant="h4">{totalBooks}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">⭐ Average Rating</Typography>
            <Typography variant="h4">{averageRating}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
