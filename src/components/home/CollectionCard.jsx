import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({collection:{id,category,image}}) => {
  return (
    <div className="col-span-2 overflow-hidden rounded-lg h-[250px]">
      <Link to={`/category/${category}`} className="relative w-full h-[250px] group">
        <img
          src={image}
          className="w-full group-hover:scale-105 duration-300 object-cover"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-[250px] flex items-center justify-center bg-black/50 group-hover:bg-black/60 duration-300">
          <h3 className="text-2xl text-neutral-content font-bold">{category}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
