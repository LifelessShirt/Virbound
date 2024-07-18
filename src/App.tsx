import React, { createContext, useState } from 'react';
import './App.css';
import './App.mobile.css';
import { Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Minebound from './Pages/Minebound/Minebound';
import About from './Pages/About/About';
import User from './Pages/User/User';
import ModalProvider from './Contexts/ModalContext/ModalContext';
import Modal from './Components/Modal/Modal';

const App = () => {
  return (<>
    <ModalProvider>
    <Modal/>
    <Menu/>
    <div className={`Main`}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minebound" element={<Minebound />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
    </Routes>
    </div>
    </ModalProvider>
  </>);
}

export default App;
