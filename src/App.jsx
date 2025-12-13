import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import General from './Pages/General/General';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/General' element={<General />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;