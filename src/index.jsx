import React from 'react';
import './index.css'; // import the CSS file
import App from './App';
import "./plugin/i18n/i18n.js";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( 
  <App></App>
);