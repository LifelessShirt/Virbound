import React, { useContext, useEffect, useRef, useState } from 'react';
import Style from './Menu.module.css';
import { Link } from 'react-router-dom';

interface MenuProps {currentPath:string, status?:any, onClick:any}

const Menu = ({currentPath,status,onClick}:MenuProps) => {
  const path = Style[currentPath.slice(1)] || '';
  return ( <>
    <div className={`${Style.menu_mobile} ${path} ${Style[status]}`}>
        <button className={Style.menu_mobile_toggler} onClick={onClick}></button>
    </div>
    <div className={`${Style.menu} ${path}`}>
        <Link to="/">
            <div className={Style.menu_block}>Головна</div>
        </Link>
        <Link to="/minebound">
            <div className={Style.menu_block}>MineBound</div>
        </Link>
        <Link to="/about">
            <div className={Style.menu_block}>Про нас</div>
        </Link>
    </div>
  </>);
}

export default Menu;