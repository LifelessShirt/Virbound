import React, { useEffect, useRef, useState } from 'react';
import Style from './Menu.module.css';
import { Link } from 'react-router-dom';

interface MenuProps {currentPath:string}

const Menu = ({currentPath}:MenuProps) => {
  return (
    <div className={`${Style.menu} ${Style[currentPath.slice(1)] || ''}`}>
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
  );
}

export default Menu;