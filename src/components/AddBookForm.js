import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Paper
} from '@mui/material';

const AddBookForm = ({ onBookAdded, editMode = false, initialData = {}, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: '',
    description: '',
  });

  useEffect(() => {
    if (editMode && initialData) {
      setFormData({
        title: initialData.title || '',
        author: initialData.author || '',
        rating: initialData.rating || '',
        description: initialData.description || '',
      });
    }
  }, [editMode, initialData]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const url = editMode
      ? `http://127.0.0.1:8000/api/books/${initialData.id}/`
      : 'http://127.0.0.1:8000/api/books/';
    const method = editMode ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(`${editMode ? 'Updated' : 'Added'} book:`, data);
        if (editMode && onUpdate) {
          onUpdate(data);
        } else if (onBookAdded) {
          onBookAdded();
        }
        setFormData({ title: '', author: '', rating: '', description: '' });
      })
      .catch(err => console.error('Error:', err));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {editMode ? '✏️ Edit Book' : '➕ Add a New Book'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              type="number"
              inputProps={{ step: 0.1, min: 0, max: 5 }}
              value={formData.rating}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              minRows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 3 }}
        >
          {editMode ? 'Update Book' : 'Add Book'}
        </Button>
      </Box>
    </Paper>
  );
};

export default AddBookForm;
