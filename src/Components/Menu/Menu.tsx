import React, { useContext, useEffect, useRef, useState } from 'react';
import Style from './Menu.module.css';
import { Link } from 'react-router-dom';

interface MenuProps {currentPath:string}

const Menu = ({currentPath}:MenuProps) => {
    const [menuStatus, setMenuStatus] = useState('closed');
    const menuChangeStatus = () => {
        setMenuStatus(menuStatus === 'closed' ? 'opened' : 'closed')
    }
    const path = Style[currentPath!='/'?currentPath.slice(1):'home'] || '';
    return ( <>
        <div className={`${Style.menu} ${path} ${Style[menuStatus]}`}>
            <button className={Style.menu_mobile_toggler} onClick={menuChangeStatus}></button>
            <Link to="/">
                <div className={Style.menu_block} onClick={menuChangeStatus}>Головна</div>
            </Link>
            <Link to="/minebound">
                <div className={Style.menu_block} onClick={menuChangeStatus}>MineBound</div>
            </Link>
            <Link to="/about">
                <div className={Style.menu_block} onClick={menuChangeStatus}>Про нас</div>
            </Link>
            <Link to="/user">
                <div className={Style.menu_block} onClick={menuChangeStatus}>🫥</div>
            </Link>
      </div>
    </>);
}

export default Menu;