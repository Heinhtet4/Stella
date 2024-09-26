import React, { useState } from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import useStoreProducts from '../store/useStoreProducts'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const {products} = useStoreProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNextBtn = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
  };

  const handlePreviousBtn = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1);
    }
  }
  
  return (
    <section className='mt-1'>
        <Container>
          <div className='grid grid-cols-2 mt-3'>
          <BreadCrumb/>
          <div className="join flex justify-end">
              <button className="join-item btn" onClick={handlePreviousBtn}>«</button>
              <button className="join-item btn pointer-events-none">Page {currentPage}</button>
              <button className="join-item btn" onClick={handleNextBtn}>»</button>
          </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="join mt-16 flex justify-center">
              <button className="join-item btn" onClick={handlePreviousBtn}>«</button>
              <button className="join-item btn pointer-events-none">Page {currentPage}</button>
              <button className="join-item btn" onClick={handleNextBtn}>»</button>
          </div>
        </Container>
    </section>
  )
}

export default Shop