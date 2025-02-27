import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { Store,persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading='null' persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
