import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { AppContextProvider } from "./Context";
import App from './App';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
      <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </BrowserRouter>
  </AppContextProvider>
);

