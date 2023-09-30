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
  const [menuStatus, setMenuStatus] = useState('closed');
  const menuChangeStatus = () => {
    setMenuStatus(menuStatus === 'closed' ? 'opened' : 'closed')
  }
  return (<>
    <Menu currentPath={pathname} status={menuStatus} onClick={menuChangeStatus}/>
    <div className={`Main Main-${menuStatus}`}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minebound" element={<Minebound />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  </>);
}

export default App;
