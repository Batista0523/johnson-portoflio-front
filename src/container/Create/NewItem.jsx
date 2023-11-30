import React, { useState } from "react";
import { addItem } from "../../helpers/apicalls";

const NewItem = () => {
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
      const response = await addItem(formData);
  
      if (response && response.id) {
        alert('Item added successfully!');
        setFormData({
          title: '',
          descriptions: '',
          imageurl: '',
          builddate: '',
          contact: '',
          review: '',
          available: false,
          price: '',
          homeaddress: '',
        });
      } else {
        console.error('Unexpected response format:', response);
        alert('Item addition failed. Please try again.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Item addition failed. Please try again.');
    }
  };
  

  return (
    <div className="container mt-4">
       <h2 className="mb-3 text-center">Add New Item</h2>
      <p>
        We're excited to learn more about your home! Please enter the details below to share information
        about your property. Whether you're looking to sell, rent, or just want to document your home,
        this form is the place to do it. Your input helps us create a comprehensive record of homes in our community.
      </p>
      
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
          <label htmlFor="imageurl">Image Url</label>
          <input
            type="text"
            id="imageurl"
            name="imageurl"
            className="form-control"
            value={formData.imageurl}
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
        <div className="mb-3">
          <label htmlFor="builddate">Build Year</label>
          <input
            type="number"
            name="builddate"
            id="builddate"
            className="form-control"
            value={formData.builddate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
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
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="form-control"
            value={formData.contact}
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
          <label htmlFor="review">Review</label>
          <input
            type="text"
            name="review"
            id="review"
            className="form-control"
            value={formData.review}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price">Available</label>
          <input
            type="checkbox"
            id="available"
            name="available"
            className="form-check-box"
            value={formData.available}
            onChange={handleCheckedBoxChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
