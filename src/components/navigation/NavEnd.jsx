import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import useStoreCart from '../../store/useStoreCart'
import { Link } from 'react-router-dom';

const NavEnd = () => {
  const {carts} = useStoreCart();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  }
  return (
    <div className="navbar-end space-x-3">
          <Link to={"/cart"} className="btn btn-circle relative btn-sm" onClick={scrollTop}>
            <FaShoppingCart />
            <div className="badge badge-primary badge-xs absolute -top-1 -right-2">
              <span className="text-xs">{carts.length}</span>
            </div>
          </Link>
          <a className="btn btn-circle btn-sm">
            <FaUser/>
          </a>
    </div>
  )
}

export default NavEnd