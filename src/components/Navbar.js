import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 3 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          📖 BookHive
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          {/* Dark Mode Switch */}
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={toggleTheme} color="default" />}
            label="Dark Mode"
          />

          {/* Display user name when authenticated */}
          {isAuthenticated && (
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Hi, {user.name}
            </Typography>
          )}

          {/* Navigation Links */}
          <Link to="/dashboard">
            <Button color="inherit" variant="outlined">Dashboard</Button>
          </Link>
          <Link to="/favorites">
            <Button color="inherit" variant="outlined">Favorites</Button>
          </Link>
          <Link to="/profile">
            <Button color="inherit" variant="outlined">Profile</Button>
          </Link>
          <Link to="/pdfs">
            <Button color="inherit" variant="outlined">📄 PDFs</Button>
          </Link>

          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <Button
              color="inherit"
              variant="contained"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          ) : (
            <Button color="inherit" variant="contained" onClick={loginWithRedirect}>
              Login
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
