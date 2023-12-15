import React from 'react';
import './profile.css';
import Sidebar from '../sidebar/sidebar';


const Profile = () => {
  

  
  
    return (
      <div className="main-layout">
        <Sidebar active="profile" />
        <div className="main-content">
          {/* Your profile content here */}
        </div>
      </div>
    );
  };
  

export default Profile;
