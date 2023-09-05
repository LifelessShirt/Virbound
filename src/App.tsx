import React from 'react';
import './App.css';
import './App.mobile.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Minebound from './Pages/Minebound/Minebound';
import About from './Pages/About/About';

const App = () => {
  var pathname = useLocation().pathname;
  return (
    <div className={`Main ${pathname == '/' ? 'MainHome' : pathname == '/minebound' ? 'MainMinebound' : pathname == '/about' ? 'MainAbout' : ''}`}>
    <Menu currentPath={pathname} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minebound" element={<Minebound />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
