import React, { useEffect, useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../features/apiSlice";
import "./products.scss";
import { Link, NavLink } from "react-router-dom";
import LoadingItem from "./LoadingItem";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Products = ({ showManage, data }) => {
  const { data: apiData, isLoading } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    if (data) {
      setProducts(data);
    } else if (apiData) {
      setProducts(apiData);
    }
  }, [data, apiData]);

  const handleLike = (product) => {
    dispatch(like(product));
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure")) {
      try {
        await deleteProduct(id).unwrap();
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } catch (error) {
        alert("O`chirilmadi");
      }
    }
  };

  let productCards = products?.map((el) => {
    const isLiked = wishlist.some((item) => item.id === el.id);
    return (
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
            <button className="like__btn" onClick={() => handleLike(el)}>
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
            <Link to={`single/${el.id}`}>
              <button>See more details</button>
            </Link>
          </div>
          {showManage ? (
            <div className="manage__btns">
              <button>edit</button>
              <button onClick={() => handleDelete(el.id)}>delete</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  });

  return (
    <section>
      {isLoading ? <LoadingItem /> : <></>}
      <div className="container product__wrapper">{productCards}</div>
    </section>
  );
};

export default Products;
