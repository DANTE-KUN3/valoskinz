import React, { useState, useEffect } from 'react';
import './buy.css'; // Your CSS file for Buy component
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const Buy = () => {
  const [items, setItems] = useState([]); // State to store fetched items
 
  const itemCollectionRef = collection(db, "selling");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredItems = await getDocs(itemCollectionRef);
        const data = filteredItems.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [itemCollectionRef]);

  const redirect = () => {
    // Your redirect logic here
  };

  return (
    <div className="item-grid">
    {items.map((selling) => (
      <div key={selling.id} className="item-card">
        <img src={selling.imageUrl} alt="Item" className="item-image" />
        <div className="item-details">
          <div className="card-header">
            <h3>{selling.user}</h3>
            <p className="item-price">Price:rs{selling.price}</p>
          </div>
          <div className="card-body">
            <p className="item-info">Skin: {selling.skin}</p>
            <p className="item-info">Rank: {selling.rank}</p>
            {/* Additional details */}
            <button className="message-seller-button" onClick={redirect}>
              Message
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Buy;
