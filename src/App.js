// src/App.js
import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import PDFList from './components/PDFList'; // Import PDFList component
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pdfs" element={<PDFList />} /> {/* PDF Viewer Route */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
