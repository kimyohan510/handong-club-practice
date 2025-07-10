import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './HomePage';
import './index.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<HomePage />);
