import React from 'react'
import Container from '../Container'
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
    const location = useLocation();
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').slice(0,1);
  return (
        <div className="breadcrumbs text-sm">
            <ul>
              <li><Link to={'/'}>Home</Link></li>
                <li className='text-gray-500'>{crumbs}</li>
            </ul>
        </div>
  )
}

export default BreadCrumb