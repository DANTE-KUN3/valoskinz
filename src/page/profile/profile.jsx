import React from 'react';
import './profile.css';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../components/context/AuthContext';


const Profile = () => {
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
    <div>
      <div className="side-navigation">
        <ul>
        
          <li><Link to="/myads">My Ads</Link></li>
          <li>  <Link to="/myads">User profile</Link></li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </div>
      
      <div className="main-content">
        {/* Your profile content here */}
      </div>
    </div>
  );
};

export default Profile;
