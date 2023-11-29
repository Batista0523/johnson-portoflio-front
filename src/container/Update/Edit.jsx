import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItem, updateItem } from "../../helpers/apicalls";

const Edit = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    descriptions: "",
    imageurl: "",
    builddate: "",
    contact: "",
    review: "",
    available: false,
    price: "",
    homeaddress: "",
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const itemDetails = await getItem(id);
        setFormData(itemDetails);
      } catch (error) {
        console.error("Error fetching item details", error);
      }
    };

    fetchItemDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckedBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateItem(id, formData);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="conatiner mt-4">
      <h2 className="mb-3 text-center">Update Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptions" className="form-label">
            Descriptions
          </label>
          <textarea
            className="form-control"
            id="descriptions"
            name="descriptions"
            value={formData.descriptions}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageurl" className="form-label">
            Image Url
          </label>
          <input
            type="text"
            name="imageurl"
            id="imageurl"
            className="form-control"
            value={formData.imageurl}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="builddate" className="form-label">
            Build Year
          </label>
          <input
            type="number"
            className="form-control"
            name="builddate"
            id="builddate"
            value={formData.builddate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="form-control"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="review">Review</label>
          <input
            type="number"
            id="number"
            className="form-control"
            name="review"
            value={formData.review}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="homeaddress">Property Address</label>
          <input
            type="text"
            name="homeaddress"
            id="homeaddress"
            className="form-control"
            value={formData.homeaddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="available"> Available</label>
          <input
            type="checkbox"
            name="available"
            id="available"
            className="form-check-input"
            value={formData.available}
            onChange={handleCheckedBoxChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/index" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Edit;
