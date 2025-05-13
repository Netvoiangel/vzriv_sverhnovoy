import { GlobalStyles as MUIGlobalStyles } from '@mui/material';
import React from 'react';

const GlobalStyles: React.FC = () => (
  <MUIGlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: '16px',
        lineHeight: 1.6,
        backgroundColor: '#f4f5f7', // Light background
        color: '#333333', // Dark text
        minHeight: '100vh',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      button: {
        cursor: 'pointer',
      },
    }}
  />
);

export default GlobalStyles;
