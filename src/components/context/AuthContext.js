import React, { useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(); // Initialize Firebase auth

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful signup
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        // Handle signup error
        console.error('Signup error:', error);
        throw error;
      });
  }
  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        throw error;
      });
  }
  
  function logout(){
    return auth.signOut()
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        console.log('Password reset email sent');
      })
      .catch((error) => {
        // Handle password reset error
        console.error('Password reset error:', error);
        throw error;
      });
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
