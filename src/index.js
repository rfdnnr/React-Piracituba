import { render } from 'react-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SobreNos from './Pages/SobreNos';
import reportWebVitals from './reportWebVitals';
import Primeiro from './Pages/Primeira Página/Primeiro';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Primeiro />} />
        <Route path="SobreNos" element={<SobreNos />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();