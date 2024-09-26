import React from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import useStoreCart from '../store/useStoreCart';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {
  const {carts} = useStoreCart();
  const total = carts.reduce((total, item) => total + item.total, 0);
  const tax = 0.05;
  const amount = total + (total * tax);
  const roundDownToNearestTen = () => {
    return Math.floor(amount / 10) * 10;
  }
  const netTotal = roundDownToNearestTen(amount);
  return (
    <section className='mt-2 min-h-[calc(100vh-150px)]'>
      <Container>
        <BreadCrumb/>
        <div className='flex flex-col gap-y-3 mt-5 mb-3 min-h-[300px]'>
          {carts.length === 0 ? <CartEmpty/> : null}
            {carts.map((cart)=>(
              <CartItem key={cart.id} item={cart}/>
            ))}
        </div>
        <div className="flex justify-end gap-x-3 mt-auto">
            <div> <p className='text-lg font-semibold'>Total : {total}</p> </div>
            <div> <p className='text-lg font-semibold'>+ Tax : {tax * 100} %</p> </div>
        </div>
        <div className="flex justify-end gap-x-3 mt-auto">
            <div> <p className='text-xl font-bold'>NetTotal : {netTotal }  MMK</p> </div>
        </div>
      </Container>
    </section>
  )
}

export default Cart