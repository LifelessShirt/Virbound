import React, { useState } from 'react';
import './App.css';
import './App.mobile.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Minebound from './Pages/Minebound/Minebound';
import About from './Pages/About/About';

const App = () => {
  var pathname = useLocation().pathname;
  return (<>
    <Menu currentPath={pathname}/>
    <div className={`Main`}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minebound" element={<Minebound />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  </>);
}

export default App;
