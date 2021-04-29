import React  from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () =>
{
    return (
      <nav>
        <div>
      <img src={logo} href="/" alt="logo" className="logo" />
      </div>
      </nav>
 
    );
  }
export default Header;