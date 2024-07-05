import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Solutions from '../screens/Solutions';
import Condos from '../screens/Condos';
import Companies from '../screens/Companies';
import Energy from '../screens/Energy';
import AboutUs from '../screens/AboutUs';
import Contact from '../screens/Contact';

const AppStack = () => {
 return (
  <Router>
   <Routes>
    <Route path='/home' element={<Dashboard />} />
    <Route path='/solutions' element={<Solutions />} />
    <Route path='/solutions/condos' element={<Condos />} />
    <Route path='/solutions/companies' element={<Companies />} />
    <Route path='/solutions/energy' element={<Energy />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Navigate to='/home' />} />
   </Routes>
  </Router>
 );
};

export default AppStack;
