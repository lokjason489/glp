import React from 'react';
import HomePage from './pages/HomePage';
import RoomType from './pages/RoomType';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:skin?" element={<HomePage />} />
        <Route path="/roomType" element={<RoomType />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;