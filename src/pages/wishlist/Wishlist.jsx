import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./wishlist.scss"
import Header from "../../components/layout/header/Header"

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.value);

  return (
    <section>
      <Header/>
      <div className="wishlist">
        {wishlistData?.length ? (
          <Products showManage={false} data={wishlistData} />
        ) : (
          <h2>You have not favourities</h2>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
