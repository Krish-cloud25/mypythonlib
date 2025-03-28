// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: '0.3s ease-in-out',
          minHeight: 250,
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: 600,
        },
        body2: {
          color: '#555',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
