import React from 'react'
import useStoreCategories from '../../store/useStoreCategories'
import { Link } from 'react-router-dom';

const NavMobile = () => {
  const {categories} = useStoreCategories();
  return (
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/shop'}>Shop</Link></li>
        {categories.map((item)=>(
          <li key={item.id}>
            <details>
              <summary>{item.category}</summary>
              <ul className="p-2">
                {item.subcategories.map((subitem)=>(
                  <li key={subitem.id}><Link to={`/category/${subitem.subcategory}`}>{subitem.subcategory}</Link></li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default NavMobile