import React  from 'react';
import {
    Navbar,
    NavbarBrand
  } from 'reactstrap';

const Header = () =>
{
    return (
      <div>
          <h1 style={{textAlign:'center', color:'black'}}>NewsApp</h1>
        <Navbar color="light" light expand="md">
        
          <NavbarBrand href="/">newsAPP</NavbarBrand>
        </Navbar>
      </div>
    );
  }
export default Header;