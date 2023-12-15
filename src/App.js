import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext'; // Import the AuthProvider
import Navbar from './components/navbar';
import Buy from './page/buy/buy';
import Sell from './page/sell/sell';
import Msg from './page/message/msg';
import Profile from './page/profile/profile';
import Signup from './page/signup/Signup';
import Login from './page/login/login';
import MyAds from './page/myads/myads';
import UserProfile from './page/userprofile/userprofile';



function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider> {/* Add AuthProvider to wrap the entire application */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/msg" element={<Msg />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/myads" element={<MyAds/>} />
            <Route path="/userprofile" element={<UserProfile/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;
