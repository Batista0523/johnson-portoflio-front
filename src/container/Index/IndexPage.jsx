import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllItems } from "../../helpers/apicalls";

const IndexPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    try {
      const response = await getAllItems();
      setItems(response);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  return (
    <div>
      <h1>Property Listing</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <h4>{item.homeaddress}</h4>
            <Link to={`/show/${item.id}`}>
              <img
                src={item.imageurl}
                alt={item.title}
                style={{ maxWidth: "320px", maxHeight: "200px" }}
              />
            </Link>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
