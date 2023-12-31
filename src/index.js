import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Show from './Pages/Show';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element = {<Home />} />
      <Route path= "/:id" element={<Show />} />
    </Routes>
  </BrowserRouter>

);

