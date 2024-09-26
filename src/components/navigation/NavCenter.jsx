import React, { useState } from "react";
import useStoreCategories from "../../store/useStoreCategories";
import { Link } from "react-router-dom";

const NavCenter = () => {
  const { categories } = useStoreCategories();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to={"/"}> Home </Link>
        </li>
        <li>
          <Link to={"/shop"}> Shop </Link>
        </li>
        <li onClick={handleMenu}>
          <details>
            <summary>Categories</summary>
          </details>
        </li>
        <div className={`menu menu-horizontal bg-base-300 rounded-box min-w-max 
          z-[1] shadow absolute top-[64px] left-[50%] translate-x-[-50%] 
          ${menuOpen ? "visible" : "hidden"}`}>
          {categories.map((item) => (
            <li key={item.id}>
              <Link to={`/category/${item.category}`} className="font-bold">{item.category}</Link>
              <ul>
                {item.subcategories.map((subitem) => (
                  <li key={subitem.id}>
                    <Link to = {`/category/${subitem.subcategory}`}>{subitem.subcategory}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default NavCenter;
