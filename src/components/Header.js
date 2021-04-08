import React from 'react';
import './header.css';
import logo from '../logo.svg';
import Search from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import { Home, AccountCircle } from '@material-ui/icons';

const Header = () => {
    return (
        <div className="header__top">
            <div className="header__left">
                <div className="logo">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="search__box">
                    <Search className="search_icon"/>
                    <input className="search__box" type="text" name="search" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={Home} title='Home'/>
                <HeaderOptions Icon={AccountCircle} title='Account'/>
            </div>
        </div>
    )
}

export default Header
