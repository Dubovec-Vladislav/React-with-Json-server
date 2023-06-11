import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import CarDetail from '../screens/car-detail/CarDetail'

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="car/:id" element={<CarDetail />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;