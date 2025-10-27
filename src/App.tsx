import React, { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router';
import ROUTES from './routes/routes';
import { Container } from '@radix-ui/themes';

function App() {
  return (
    <Container>
        <Link to={ROUTES.PRODUCTS_PAGE}>
        Перейти на страницу с продуктами
        </Link>
    </Container>
  );
}

export default App;
