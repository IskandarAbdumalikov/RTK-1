import React, { useState, useEffect } from "react";
import "./editModule.scss";

const EditModule = ({ setShowEditModule, product, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    description: "",
    price: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        brand: product.brand,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, ...formData });
  };

  return (
    <div className="edit__product__module">
      <h2>Edit product data</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          placeholder="Brand"
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          placeholder="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          placeholder="Thumbnail"
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      <button
        className="edit__product__module__closer"
        onClick={() => setShowEditModule(false)}
      >
        X
      </button>
    </div>
  );
};

export default EditModule;
