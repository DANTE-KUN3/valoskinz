import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle } from 'phosphor-react';
import { useAuth } from './context/AuthContext';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/msg">Messages</Link>
        <Link to="/profile">Profile</Link>
        <div className="auth-dropdown">
          <UserCircle size={30} />
          <div className="auth-options">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
