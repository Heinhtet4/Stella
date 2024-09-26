import React, { useState } from "react";
import herophoto from "../../assets/herophoto.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const [imgLoad, setimgLoad] = useState(true);
  const handleSkeleton = () => {
    setimgLoad(false);
  };
  return (
    <div className="hero bg-base-200 rounded-b-2xl shadow-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {imgLoad && <div className="skeleton h-[200px] w-[320px]"></div>}
        <img
          src={herophoto}
          className={`max-w-[280px] sm:max-w-sm rounded-lg shadow-2xl  ${
            imgLoad ? "hidden" : ""
          }`}
          onLoad={handleSkeleton}
        />
        <div className="text-justify px-5 lg:px-0">
          <h1 className="text-center lg:text-left text-3xl font-bold">
            Shop the Best Today!
          </h1>
          <p className="py-6">
            At Stella, we believe in providing you with the best shopping
            experience. Explore our curated selection of products designed to
            meet your needs. Enjoy unbeatable prices and exceptional service.
            Start your shopping adventure with us today!
          </p>
          <div className="space-x-2 text-center lg:text-left">
            <Link to={"/shop"} className="btn btn-primary">Shop Now </Link>
            <a href="#collection" className="btn btn-ghost">Explore Collection</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
