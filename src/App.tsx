import React from 'react';
import HomePage from './pages/home';
import PageNotFound from './pages/error';

import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
