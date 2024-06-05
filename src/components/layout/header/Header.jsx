import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useGetSearchProductsQuery } from "../../../features/apiSlice";
import NavSearchModule from "./NavSearchModule";

const Header = () => {
  const [value, setValue] = useState("");

  const { data, isLoading, isSuccess } = useGetSearchProductsQuery(value, {
    skip: value.trim().length === 0, 
  });

  const wishlistDataLength = useSelector(
    (state) => state.wishlist.value
  ).length;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header>
      <nav className="container header">
        <div className="header__logo">
          <Link to={"/"}>LOGO</Link>
        </div>
        <ul className="header__list">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/manageProduct"}>Admin</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>
              Wishlist <sup>{wishlistDataLength}</sup>
            </NavLink>
          </li>
        </ul>
        <form
          className="header__form"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Search..."
            type="text"
            value={value}
            onChange={handleInputChange} 
          />
          <button type="submit">
            <IoSearch />
          </button>
          {value.trim() && <NavSearchModule data={data} />}
        </form>
        <div className="header__btns">
          <Link to={"/admin/manageProduct"}>
            <button>Admin</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
