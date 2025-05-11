import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
