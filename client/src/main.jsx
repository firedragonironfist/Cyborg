import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FreeComponent from "./components/FreeComponent"
import AuthComponent from "./components/AuthComponent"
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route path="/auth" element={<AuthComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
