import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import useStoreProducts from '../store/useStoreProducts'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import useStoreCart from '../store/useStoreCart'

const ProductDetail = () => {
  const {products} = useStoreProducts();
  const {id} = useParams();
  const product = products.find(product => product.id == id);
  const similarProduct = products.filter(el => el.category === product.category && el.id !== product.id);
  const random4Products = similarProduct.sort(() => Math.random() - 0.5).slice(0, 4);

  const {carts,addCart} = useStoreCart();
  const handleAddCart = () => {
    const item = {id, name: product.name, image: product.image, size: product.size, price: product.price, quantity:1};
    addCart(item);
  }
  return (
    <Container className={"mt-5"}>
      <BreadCrumb/>
      <section className='py-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <figure className='grid grid-cols-2 gap-2'>
            <img src={product.image} alt={product.name} className='w-full'/>
            <img src={product.image} alt={product.name} className='w-full'/>
            <img src={product.image} alt={product.name} className='w-full'/>
            <img src={product.image} alt={product.name} className='w-full'/>
          </figure>
          <div className='flex flex-col gap-y-4'>
            <div className='flex items-center justify-between'>
              <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="badge badge-neutral text-xs">
                  {product.subcategory}
                </div>
            </div>
            <div>
            <p className="text-gray-700"> Available Sizes — </p>
            <div className='flex gap-x-3 mt-2'>
            {product.size.map((el) => (
              <p key={el} className="text-lg border border-base-300 px-3 rounded py-1">{el}</p>
            ))}
            </div>
            <p className='text-primary-content text-sm mt-1'>
              Please note that you can select your preferred size and quantity after adding the product to your cart. You’ll be able to adjust your choices on the cart page before completing your purchase.
            </p>
            </div>
            <div>
              <p className="text-gray-700"> Description — </p>
              <p className="text-lg">{product.description}</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className="text-3xl font-bold">{product.price} MMK</p>
              <button className="btn btn-primary" onClick={handleAddCart}> Add to Cart </button>
            </div>
            <div>
              
            </div>
          </div>
        </div>

        <div className='mt-20'>
          <div className='flex justify-between items-center mb-5'>
            <h1 className="text-3xl font-bold">Similar Products</h1>
            <Link to={'/shop'} className='btn btn-ghost'> View More » </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {random4Products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ProductDetail