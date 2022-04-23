import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

import { ColorsContextProvider } from './hooks/useColors';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorsContextProvider>
      <App />
    </ColorsContextProvider>
  </React.StrictMode>
);
