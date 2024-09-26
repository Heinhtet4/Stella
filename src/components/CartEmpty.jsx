import React from 'react'
import { Link } from 'react-router-dom'
import empty from '../assets/emptyCart.svg'

const CartEmpty = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="text-center p-8 bg-base-200 shadow-lg rounded-lg">
        {/* Empty cart icon or image */}
        <img 
          src={empty} 
          alt="Empty Cart" 
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        
        {/* Call to action button */}
        <Link to="/shop" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    </div>
  )
}

export default CartEmpty