import React, { useState } from "react";
import "./createProduct.scss";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [telefon, setTelefon] = useState("");
  let [region, setRegion] = useState("");
  let [street, setStreet] = useState("");
  let [house, setHouse] = useState("");
  let [floor, setFloor] = useState("");
  let [home, setHome] = useState("");

  let handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setFloor("");
    setHome("");
    setHouse("");
    setName("");
    setRegion("");
    setStreet("");
    setTelefon("");
    let newProduct = {
      name,
      email,
      telefon,
      region,
      street,
      house,
      floor,
      home,
    };
    console.log(newProduct);
    alert("Consolega qarang va siz kiritgan malumotlaringizni ko`rasiz")
  };
  return (
    <div className="create__section">
      <h1>Create product</h1>
      <form onSubmit={handleFormSubmit} action="">
        <div className="with__label">
          <label htmlFor="">Enter your name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="with__label">
          <label htmlFor="">E-mail</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="with__label">
          <label htmlFor="">Telefon</label>
          <input
            required
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            placeholder="Telefon"
            type="text"
          />
        </div>
        <div className="with__label">
          <label htmlFor="">Region</label>
          <input
            required
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Region"
            type="text"
          />
        </div>
        <div className="with__label">
          <label htmlFor="">Street</label>
          <input
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street"
            type="text"
          />
        </div>
        <div className="address__inputs">
          <div className="with__label">
            <label htmlFor="">House</label>
            <input
              required
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              placeholder="House"
              type="text"
            />
          </div>
          <div className="with__label">
            <label htmlFor="">Floor</label>
            <input
              required
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              placeholder="Floor"
              type="text"
            />
          </div>
          <div className="with__label">
            <label htmlFor="">Home</label>
            <input
              required
              value={home}
              onChange={(e) => setHome(e.target.value)}
              placeholder="Home"
              type="text"
            />
          </div>
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
