import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardActions, Paper } from '@mui/material';
import AddBookForm from './AddBookForm'; // Assuming the AddBookForm is in the same directory

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Fetch books on page load and whenever books are updated
  const fetchBooks = () => {
    fetch('http://127.0.0.1:8000/api/books/')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/books/${id}/`, {
      method: 'DELETE',
    })
      .then(() => fetchBooks())
      .catch((err) => console.error('Error deleting book:', err));
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleUpdate = (updatedBook) => {
    fetch(`http://127.0.0.1:8000/api/books/${updatedBook.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBook),
    })
      .then(() => {
        setEditingBook(null);
        fetchBooks(); // Refresh books after update
      })
      .catch((err) => console.error('Error updating book:', err));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <AddBookForm
        onBookAdded={fetchBooks}
        editMode={Boolean(editingBook)}
        initialData={editingBook || {}}
        onUpdate={handleUpdate}
      />
      <Typography variant="h5" gutterBottom>
        📚 Book List
      </Typography>
      <Grid container spacing={3}>
        {books.length === 0 ? (
          <Typography>No books available.</Typography>
        ) : (
          books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card sx={{ minHeight: 220 }}>
                <CardContent>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography color="text.secondary">by {book.author}</Typography>
                  <Typography sx={{ mt: 1 }}>⭐ {book.rating}</Typography>
                  <Typography sx={{ mt: 1 }} variant="body2">
                    {book.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="error" onClick={() => handleDelete(book.id)}>
                    ❌ Delete
                  </Button>
                  <Button size="small" onClick={() => handleEdit(book)}>
                    ✏️ Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Paper>
  );
};

export default BookList;
