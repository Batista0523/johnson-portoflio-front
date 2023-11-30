import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllItems } from "../../helpers/apicalls";
import "./IndexPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllItems();

        setItems(response);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="mb-4 text-center">Properties Listing</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{item.title}</h3>
                <h4>{item.homeaddress}</h4>
                <Link to={`/show/${item.id}`}>
                  <img
                    src={item.imageurl}
                    alt={item.title}
                    className="img-fluid"
                  />
                </Link>
                <p className="mt-2">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
