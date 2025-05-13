import React from 'react';
import { Button, Typography, Container } from '@mui/material';

function TestPage() {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h2" color="primary" gutterBottom>
        Test Page
      </Typography>
      <Typography variant="body1" color="secondary" paragraph>
        This is a test page for Material-UI.
      </Typography>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary" style={{ marginLeft: '1rem' }}>
        Secondary Button
      </Button>
    </Container>
  );
}

export default TestPage;
