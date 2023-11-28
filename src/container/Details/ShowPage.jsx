import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../helpers/apicalls';
import { Link } from 'react-router-dom';

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
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-6 mb-3">
          <img
            src={item.imageurl}
            alt={item.title}
            className="img-fluid"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
        <div className="col-md-6 mb-3">
          <h2 className="mb-3">{item.title}</h2>
          <h4 className="mb-3">{item.homeaddress}</h4>
          <p className="mb-3">{item.descriptions}</p>
          <p className="mb-3">${item.price}</p>
          <p className="mb-3">Review: {item.review}</p>
          <p className="mb-3">Build Year: {item.builddate}</p>
          <p className="mb-3">Availability : {item.available ? 'Yes' : 'No'}</p>
          <h5 className="mb-3">Contact info: {item.contact}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <Link to='/edit'>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </div>
        <div className="col-md-6 mb-3">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;

