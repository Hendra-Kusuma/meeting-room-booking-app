import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Pages/404';
import ProductPage from './Pages/products';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/products" element={<ProductPage/>} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
