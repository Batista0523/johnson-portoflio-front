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
    e.preventDeafault();

    try {
      await updateItem(id, formData);
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
            <textarea className="form-control"
            id="descriptions"
            name="descriptions"
            value={formData.descriptions}
            onChange={handleInputChange}
            />

        </div>
      </form>
    </div>
  );
};

export default Edit;
