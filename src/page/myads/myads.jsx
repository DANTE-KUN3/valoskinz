import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import { auth, db } from '../../config/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'; // Importing necessary Firestore functions

const MyAds = () => {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const fetchUserItems = async () => {
      try {
        if (auth.currentUser) {
          const q = query(collection(db, 'selling'), where('userid', '==', auth.currentUser.uid));
          const querySnapshot = await getDocs(q);

          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
          });

          setUserItems(items);
        } else {
          // Handle case when user is not authenticated
          console.log('User is not authenticated');
          setUserItems([]); // Set items to an empty array or handle differently for unauthenticated users
        }
      } catch (error) {
        console.error('Error fetching user items: ', error);
      }
    };

    fetchUserItems();
  }, []);

  return (
    <>
      {auth.currentUser ? (
        <div className="main-layout">
          <Sidebar active="profile" />
          <div className="main-content">
            <div className="my-ads-container">
              <h2 className='text-center'>My Ads</h2>
              <div className="ads-grid">
                {userItems.map((item) => (
                  <div key={item.id} className="ad-item">
                    {/* Display item details */}
                    <p>Price: {item.price}</p>
                    <p>Skin: {item.skin}</p>
                    {/* Display other item details as needed */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Display a message or redirect to login for unauthenticated users */}
          <p>Please login to view your ads</p>
        </div>
      )}
    </>
  );
};

export default MyAds;
