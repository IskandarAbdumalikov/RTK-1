import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { IoSearch } from "react-icons/io5";

const Header = () => {
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
            <NavLink to={"/"}>Wishlist</NavLink>
          </li>
        </ul>
        <form className="header__form" action="">
          <input placeholder="Search..." type="text" name="" id="" />
          <button>
            <IoSearch />
          </button>
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
