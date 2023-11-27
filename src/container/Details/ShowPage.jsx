import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../helpers/apicalls';

const ShowPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItemDetails(id);
  }, [id]);

  const fetchItemDetails = async (itemId) => {
    try {
      const itemDetails = await getItem(itemId);
      setItem(itemDetails); 
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <h4>{item.homeaddress}</h4>
      <img
        src={item.imageurl}
        alt={item.title}
        style={{ maxWidth: '320px', maxHeight: '200px' }}
      />
      <p>{item.descriptions}</p>
      <p>${item.price}</p>
      <p>Review: {item.review}</p>
      <p>Build Year: {item.builddate}</p>
      <h5>Contact info: {item.contact}</h5>
      <p>Availability : {item.available ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ShowPage;
