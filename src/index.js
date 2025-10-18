import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fontsource-variable/plus-jakarta-sans'; // Import Plus Jakarta Sans font
import '@fontsource-variable/instrument-sans'; // Import Instrument Sans font
import './styles/main.css'; // Import the main CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
