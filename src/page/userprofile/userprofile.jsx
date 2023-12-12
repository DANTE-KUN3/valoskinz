// Profile.js

import React from 'react';
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
