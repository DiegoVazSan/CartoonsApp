import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartoonsApp } from './CartoonsApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartoonsApp />
  </StrictMode>,
);
