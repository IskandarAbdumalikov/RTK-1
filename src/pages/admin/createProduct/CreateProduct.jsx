import React, { useEffect, useState } from "react";
import "./createProduct.scss";
import { usePostProductMutation } from "../../../features/apiSlice";
import { useNavigate } from "react-router-dom";
const initialState = {
  id: new Date().getTime(),
  title: "",
  price: "",
  thumbnail: "",
  category: "",
  description: "",
};

const CreateProduct = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [createProduct, { data, isLoading, isError, isSuccess, error }] =
    usePostProductMutation();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialState);
    }
  }, [isSuccess, isError]);

  let handleCreateCard = (e) => {
    e.preventDefault();
    createProduct(formData);
    navigate("/admin/manageProduct");
  };

  return (
    <div className="create__section">
      <h1>Create product</h1>
      <form onSubmit={handleCreateCard} action="">
        {Object.keys(initialState)?.map((input) => (
          <div className="with__label" key={input}>
            <label htmlFor="">
              {input === "id" ? "New product" : "Enter new product"} {input}
            </label>
            <input
              required
              readOnly={input === "id"}
              type="text"
              name={input}
              placeholder={input}
              value={formData[input]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
