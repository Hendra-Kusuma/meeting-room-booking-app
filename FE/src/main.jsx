import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Pages/404';
import RoomsPage from './Pages/rooms';
import RoomsUsage from './Pages/rooms-usage';
import ClientsPage from './Pages/Clients';
import UsersPage from './Pages/UsersPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/rooms" element={<RoomsPage/>} />
          <Route path="/room-usage" element={<RoomsUsage/>} />
          <Route path="/clients" element={<ClientsPage/>} />
          <Route path="/users" element={<UsersPage/>} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
