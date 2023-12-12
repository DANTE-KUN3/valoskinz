import React, { useState, useEffect } from 'react';
import { db, auth, storage } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes,getDownloadURL} from 'firebase/storage';
import './sell.css'; // Import your CSS file for Sell component

const Sell = () => {
  const [price, setPrice] = useState('');
  const [skin, setSkin] = useState('');
  const [rank, setRank] = useState('');
  const [userId, setUserId] = useState(null);
  const [fileupload, setFileUpload] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (auth.currentUser) {
          setUserId(auth.currentUser.uid);
        } else {
          // Handle case when user is not authenticated
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!fileupload) return;
  
    const filesfolderref = ref(storage, `images/${fileupload.name}`);
    try {
      await uploadBytes(filesfolderref, fileupload);
  
      const imageUrl = await getDownloadURL(filesfolderref); // Retrieve download URL
  
      await addDoc(collection(db, 'selling'), {
        price: Number(price),
        skin: skin,
        rank: rank,
        userId: userId,
        imageUrl: imageUrl, // Store the URL in Firestore
      });
  
      setPrice('');
      setSkin('');
      setRank('');
      setFileUpload(null); // Reset file upload state after submission
    } catch (error) {
      console.error('Error adding item: ', error);
    }
  };
  

  return (
    <div className="sell-container">
      <h2 className="sell-heading">Sell</h2>
      <form className="sell-form" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFileUpload(e.target.files[0])}
          className="sell-input bigger-input"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value.replace(/\D/, ''))}
          className="sell-input bigger-input"
        />
        <input
          type="text"
          placeholder="Skin"
          value={skin}
          onChange={(e) => setSkin(e.target.value)}
          className="sell-input bigger-input"
        />
        <input
          type="text"
          placeholder="Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="sell-input bigger-input"
        />
        <button type="submit" className="sell-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Sell;
