import React, { useContext, useEffect, useRef, useState } from 'react';
import Style from './Menu.module.css';
import { Link } from 'react-router-dom';
import { ModalContext } from '../../Contexts/ModalContext/ModalContext';
import { GetData } from '../../Utils/GetData';

interface MenuProps {currentPath:string}

const Menu = () => {
    const {modal, setModal} = useContext(ModalContext);
    const [menuStatus, setMenuStatus] = useState('closed');
    const menuChangeStatus = () => {
        setMenuStatus(menuStatus === 'closed' ? 'opened' : 'closed')
    }
    const user = GetData("https://virbound.com/system/user/user.php");
    return ( <>
        <div className={`${Style.menu} ${Style[menuStatus]}`}>
            <button className={Style.menu_mobile_toggler} onClick={menuChangeStatus}></button>
            <Link to="/">
                <div className={Style.menu_block_logo}></div>
            </Link>
            <Link to="/">
                <div className={Style.menu_block} onClick={() => setMenuStatus('closed')}>Home</div>
            </Link>
            <Link to="/minebound">
                <div className={Style.menu_block} onClick={() => setMenuStatus('closed')}>MineBound</div>
            </Link>
            <Link to="/wiki">
                <div className={Style.menu_block} onClick={() => setMenuStatus('closed')}>Wiki</div>
            </Link>
            <Link to="/about">
                <div className={Style.menu_block} onClick={() => setMenuStatus('closed')}>About</div>
            </Link>
            {user ?
                <Link to="/user">
                    <div className={`${Style.menu_block} ${Style.menu_block_user}`} style={{backgroundColor: `${user['avatarColor']}88`}}>{user['avatarIcon']}</div>
                </Link>
            :
                <div className={`${Style.menu_block} ${Style.menu_block_right}`} onClick={() => setModal(true)}>Authorization</div>
            }
            {/* <Link to="/user">
                <div className={`${Style.menu_block} ${Style.menu_block_right}`} onClick={() => setModal(true)}>Authorization</div>
            </Link> */}
      </div>
    </>);
}

export default Menu;