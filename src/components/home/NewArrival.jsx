import React from "react";
import ProductCard from "../ProductCard";
import useStoreProducts from "../../store/useStoreProducts";

const NewArrival = () => {
  const {products} = useStoreProducts();
  const last4Products = products.slice(-4);
  return (
    <section className="mt-10 bg-base-100 pt-5 space-y-10">
      <div className="">
        <h1 className="text-center text-3xl font-bold">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {last4Products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
