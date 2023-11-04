import React from 'react';
import HeaderStyle from './Header.styles';
import logo from '../logo.jpg';

const Header = () => {
    
  return (
    <HeaderStyle className="container-fluid">
        <img src={logo} alt="logo Rick & Morty" />
    </HeaderStyle>
  )
}

export default Header;