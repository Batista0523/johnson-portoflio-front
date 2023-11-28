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
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4 text-center">
          <img
            src={item.imageurl}
            alt={item.title}
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-8 mb-4">
          <h2 className="mb-3 text-center">{item.title}</h2>
          <h4 className="mb-3 text-center">{item.homeaddress}</h4>
          <p className="mb-3 text-center">{item.descriptions}</p>
          <p className="mb-3 text-center">Build Year: {item.builddate}</p>
          <p className="mb-3 text-center">Availability: {item.available ? 'Yes' : 'No'}</p>
          <p className="mb-3 text-center">Review: {item.review}</p>
          <p className="mb-3 text-center">${item.price}</p>
          <h5 className="mb-3 text-center">Contact info: {item.contact}</h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
          <Link to={`/edit/${id}`}>
            <button className="btn btn-primary btn-lg">Edit</button>
          </Link>
        </div>
        <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-danger btn-lg">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;