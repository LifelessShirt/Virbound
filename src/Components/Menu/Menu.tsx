import React, { useEffect, useRef } from 'react';
import Style from './Menu.module.css';
import { Link, useNavigate } from 'react-router-dom';

interface MenuProps {currentPath:string}

const Menu = ({currentPath}:MenuProps) => {
  return (
    <div className={`${Style.menu} ${currentPath == "/about" ? Style.menu_about : currentPath == "/minebound" ? Style.menu_minebound : null}`}>
        <Link to="/">
            <div className={Style.menu_block}>Головна</div>
        </Link>
        <Link to="/minebound">
            <div className={Style.menu_block}>Minebound</div>
        </Link>
        <Link to="/about">
            <div className={Style.menu_block}>Про нас</div>
        </Link>
    </div>
  );
}

export default Menu;