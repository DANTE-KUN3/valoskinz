// MyAds.js

import React, { useState, useEffect } from 'react';
import './myads'; // Your CSS file for MyAds component
import { db, auth } from '../../config/firebase'; 
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  ;
import MyAds from './MyAds';
import Profile from './Profile';
import UserProfile from './UserProfile';// Assuming you have Firebase initialized

const MyAds = () => {
  const [userAds, setUserAds] = useState([]); // State to store fetched user ads

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userAdsRef = db.collection('selling').where('userId', '==', user.uid); // Adjust the field name as per your schema

          const snapshot = await userAdsRef.get();
          const adsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUserAds(adsData);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-layout">
    <Sidebar />
    <div className="content">
      <Switch>
        <Route path="/myads" component={MyAds} />
        <Route path="/profile" component={Profile} />
        <Route path="/userprofile" component={UserProfile} />
        {/* Add more routes for other pages */}
      </Switch>
    </div>
  </div>
);
};



export default MyAds;
