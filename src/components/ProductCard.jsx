import React from "react";
import { Link } from "react-router-dom";
import useStoreCart from "../store/useStoreCart";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";


const ProductCard = ({product:{id,name,image,description,size,price,subcategory}}) => {
  const {addCart,carts} = useStoreCart();
  const handleAddCart = () => {
    const uniqueId = uuidv4();
    const item = {cartid : uniqueId,id, name, image, size, price, quantity:1,total:price};
    addCart(item);
    toast.success('Product successfully added to cart!')
  }
  return (
    <div className="card card-compact bg-base-200 w-full overflow-hidden shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-[350px] sm:h-[250px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{price} MMK</h2>
          <div className="badge badge-neutral text-xs">
            {subcategory}
          </div>
        </div>
        <div>
          <p className="text-lg">{name}</p>
        </div>
        <p className="text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <div className="card-actions justify-end mt-auto">
          <Link to={`/product-detail/${id}`} className="btn btn-sm">
            View Details
          </Link>
          <button className={`btn btn-primary btn-sm`} onClick={handleAddCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
