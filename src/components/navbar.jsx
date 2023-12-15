import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle } from 'phosphor-react';

import './navbar.css';

const Navbar = () => {
 

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/msg">Messages</Link>
        <Link to="/userprofile">Profile</Link>
       
      
         
            <Link to="/signup">
            <UserCircle size={30} />
              </Link>
          
            
          </div>
        </div>
      
   
  );
};

export default Navbar;
