// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import your sidebar CSS
import {  useNavigate } from 'react-router-dom';

import { useAuth } from '../../components/context/AuthContext';

const Sidebar = ({ active }) => {
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
    <div className="side-navigation">
      <ul>
        <li className={active === 'myads' ? 'active' : ''}>
          <Link to="/myads">My Ads</Link>
        </li>
       
        <li className={active === 'userprofile' ? 'active' : ''}>
          <Link to="/userprofile">User Profile</Link>
        </li>
        {/* Add other sidebar links */}
      </ul>
      <button className='button' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
