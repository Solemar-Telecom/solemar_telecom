import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Solutions from '../screens/Solutions';

const AppStack = () => {
 return (
  <Router>
   <Routes>
    <Route path='/home' element={<Dashboard />} />
    <Route path='/solutions' element={<Solutions />} />
    <Route path='*' element={<Navigate to='/home' />} />
   </Routes>
  </Router>
 );
};

export default AppStack;
