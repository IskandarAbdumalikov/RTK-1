import React from "react";
import { useGetAllProductsQuery } from "../../features/apiSlice";
import "./products.scss";
import { Link, NavLink } from "react-router-dom";
import LoadingItem from "./LoadingItem";

const Products = ({ showManage }) => {
  const { data, isLoading } = useGetAllProductsQuery();
  let products = data?.map((el) => (
    <div className="product__card" key={el.id}>
      {showManage ? (
        <NavLink>
          <img src={el.thumbnail} alt="" />
        </NavLink>
      ) : (
        <NavLink to={`single/${el.id}`}>
          <img src={el.thumbnail} alt="" />
        </NavLink>
      )}
      <div className="product__card__info">
        <h3>{el.title}</h3>
        <h2>{el.price}$</h2>
        <p>{el.description}</p>
        <div className="product__card__info__btns">
          <button>Add to cart</button>
          <Link to={`single/${el.id}`}>
            <button>See more details</button>
          </Link>
        </div>
        {showManage ? (
          <div className="manage__btns">
            <button>edit</button>
            <button>delete</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <section>
      {isLoading ? <LoadingItem /> : <></>}
      <div className="container product__wrapper">{products}</div>
    </section>
  );
};

export default Products;
