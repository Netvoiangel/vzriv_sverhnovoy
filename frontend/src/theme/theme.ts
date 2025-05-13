import { createTheme } from '@mui/material/styles';

// Define your color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Blue
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',  // Purple
      light: '#d05ce3',
      dark: '#6a0080',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      light: '#60ad5e',
      dark: '#005005',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 400 },
    h6: { fontSize: '1rem', fontWeight: 400 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 300 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  breakpoints: {
    values: {
      xs: 0,         // Extra small devices (phones)
      sm: 480,       // Small devices (large phones)
      md: 768,       // Medium devices (tablets)
      lg: 992,       // Large devices (desktops)
      xl: 1200,      // Extra large devices (large desktops)
      xxl: 1600,     // Ultra wide screens
      mobile: 0,     // Alternative naming for mobile
      tablet: 600,
      desktop: 900,
      largeDesktop: 1200,
      ultraWide: 1600,
    },
  },
});

export default theme;
