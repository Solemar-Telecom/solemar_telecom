import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';

const AppStack = () => {
 return (
  <Router>
   <Routes>
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='*' element={<Navigate to='/dashboard' />} />
   </Routes>
  </Router>
 );
};

export default AppStack;
