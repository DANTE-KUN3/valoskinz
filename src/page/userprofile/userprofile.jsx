import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import { useAuth } from '../../components/context/AuthContext'; // Import your AuthContext

const UserProfile = () => {
  const { currentUser, resetPassword } = useAuth();
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);
  const [userProfile, setUserProfile] = useState(null); // Initialize userProfile state

  useEffect(() => {
    // Fetch user profile information when the currentUser updates
    if (currentUser) {
      setUserProfile({
        email: currentUser.email,
        // Password should not be accessed directly due to security reasons
        // Firebase does not provide direct access to the user's password
      });
    } else {
      setUserProfile(null); // Reset userProfile if currentUser is null
    }
  }, [currentUser]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(resetEmail);
      setResetSuccess(true);
      setResetError(null);
    } catch (error) {
      setResetError(error.message);
      setResetSuccess(false);
    }
  };

  return (
    <div className="main-layout">
      <Sidebar active="userprofile" />
      <div className="main-content">
        <h2>User Profile</h2>
        {userProfile && (
          <div>
            <p><strong>Email:</strong> {userProfile.email}</p>
            {/* Avoid displaying the password for security reasons */}
            {/* If you need to edit the password, provide a secure form */}
            <p><strong>Password:</strong> **********</p>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button type="submit">Reset Password</button>
            </form>
            {resetSuccess && <p>Password reset email sent!</p>}
            {resetError && <p>Error: {resetError}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
