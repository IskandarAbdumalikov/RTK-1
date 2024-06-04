import React from "react";
import "./home.scss";
import "./swiper.scss";
import Header from "../../components/layout/header/Header";
import Products from "../../components/products/Products";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./swiper.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  let swiper = (
    <SwiperSlide>
      <section className="hero container">
        <div className="hero__left">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            excepturi commodi eum blanditiis facilis nulla natus aut dolore
            quaerat voluptatibus!
          </h2>
        </div>
        <div className="hero__right">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
            alt=""
          />
        </div>
      </section>
    </SwiperSlide>
  );
  return (
    <div>
      <Header />
      <main>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {swiper}
          {swiper}
          {swiper}
          {swiper}
        </Swiper>
        <Products showManage={false} />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
