// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import your sidebar CSS

const Sidebar = ({ active }) => {
  return (
    <div className="side-navigation">
      <ul>
        <li className={active === 'myads' ? 'active' : ''}>
          <Link to="/myads">My Ads</Link>
        </li>
        <li className={active === 'profile' ? 'active' : ''}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={active === 'userprofile' ? 'active' : ''}>
          <Link to="/userprofile">User Profile</Link>
        </li>
        {/* Add other sidebar links */}
      </ul>
      {/* You can place the logout button or other common components here */}
    </div>
  );
};

export default Sidebar;
