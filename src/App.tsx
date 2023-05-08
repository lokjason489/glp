import React from 'react';
import HomePage from './pages/HomePage';
import RoomType from './pages/RoomType';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import BookingSearch from './pages/BookingSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface Props {
}

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:skin?" element={<HomePage />} />
        <Route path="/roomType" element={<RoomType />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path='/terms-of-use' element={<TermsOfUse />}></Route>
        <Route path='/booking-search' element={<BookingSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
 
export default App;