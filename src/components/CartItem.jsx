import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import useStoreCart from '../store/useStoreCart';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const CartItem = ({item:{cartid,id, name, image, size, price, quantity,total}}) => {
  const{increaseQty,decreaseQty,removeItem} = useStoreCart();
  const handleIncrease = () => {
    increaseQty(cartid);
  }
  const handleDecrease = () => {
    if(quantity === 1){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          removeItem(cartid);
          toast.success("Your item has been deleted!")
        }
      });
    }
    if(quantity > 1){
      decreaseQty(cartid);
    }
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 shadow px-5 py-3 items-center rounded-lg bg-base-200 gap-3">
    <figure className="">
        <img src={image} alt="" 
        className='w-28 h-32 object-cover rounded-md' />
    </figure>
    <div className="col-span-2 md:col-span-1">
      <h1 className="text-md mb-1">{name}</h1>
      <select className="select border border-base-300 bg-base-200  w-full max-w-xs">
          <option disabled>Select Size (Required)</option>
            {size.map(el => (<option value={el} key={el}>{el}</option>))}
      </select>
    </div>
    <div className='col-span-2 md:col-span-1'>
      <h1 className='text-sm font-bold text-left md:text-center'>1qty * {price}</h1>
    </div>
    <div className=''>
        <div className="join flex justify-center">
          <button className="join-item btn bg-base-300 border-base-300" onClick={handleDecrease}>
            <FaMinus/>
          </button>
          <button className="join-item btn bg-base-300 border-base-300 pointer-events-none text-lg">
            {quantity}
          </button>
          <button className="join-item btn bg-base-300 border-base-300" onClick={handleIncrease}>
            <FaPlus/>
          </button>
        </div>
    </div>
    <div className='col-span-3 md:col-span-1'>
      <h1 className="text-xl font-bold text-right">{total} MMK</h1>
    </div>
</div>
  )
}

export default CartItem