import React from 'react';
import { Typography, Button, Container, Stack } from '@mui/material';
import { useBreakpoints } from './hooks/useBreakpoints';

function App() {

  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useBreakpoints();

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Stack spacing={3}>
        {/* Заголовки */}
        <Typography variant="h1" color="primary">Heading 1</Typography>
        <Typography variant="h2" color="secondary">Heading 2</Typography>
        <Typography variant="h3" color="error">Heading 3</Typography>
        <Typography variant="h4" color="warning">Heading 4</Typography>
        <Typography variant="h5" color="success">Heading 5</Typography>
        <Typography variant="h6" color="textPrimary">Heading 6</Typography>
        <Typography variant="h1">
          {isMobile && 'Mobile'}
          {isTablet && 'Tablet'}
          {isSmallDesktop && 'Small Desktop'}
          {isDesktop && 'Desktop'}
          {isLargeDesktop && 'Large Desktop'}
          {isUltraWide && 'Ultra Wide'}
        </Typography>
        {/* Основной текст */}
        <Typography variant="body1">
          This is body1 text. It should be larger and bolder than body2.
        </Typography>
        <Typography variant="body2">
          This is body2 text. It should be smaller and lighter than body1.
        </Typography>

        {/* Кнопки */}
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button variant="contained" color="error">
          Error Button
        </Button>
        <Button variant="contained" color="warning">
          Warning Button
        </Button>
        <Button variant="contained" color="success">
          Success Button
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
