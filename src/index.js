//------------------START IMPORTS-----------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
//Import LOCAL files
import './index.css';
import App from './App';
import { MainContext } from "./context/MainContext";
//------------------END IMPORTS------------------


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <MainContext>
          <App />
        </MainContext>
    </BrowserRouter>
  </React.StrictMode>
);

