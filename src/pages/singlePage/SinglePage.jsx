import React, { useEffect } from "react";
import { useGetSingleProductQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import "./singlePage.scss";
import { FaHeart } from "react-icons/fa";

const Single = () => {
  const { Id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(Id);

  console.log(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Id]);

  if (isLoading) {
    return (
      <div style={{ marginTop: "150px" }} className="single__loading container">
        <div className="single__loading__img bg__animation"></div>
        <div className="single__loading__info">
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Xatolik yuz berdi: {error.message}</p>;
  }

  if (!product) {
    return <p>Mahsulot topilmadi</p>;
  }

  return (
    <div>
      <Header />
      <section className="single__item container">
        <div className="single__card">
          <div className="single__card__left">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="single__card__right">
            <h1 style={{fontSize:"30px"}}>{product.title}</h1>
            <h3>{product.description}</h3>
            <p>Category : {product.category}</p>
            <p>Brand : {product.brand}</p>
            <p>Price : {product.price}$</p>
            <div className="single__btns">
              <button>Buy</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
