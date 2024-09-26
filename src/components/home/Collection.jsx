import React from 'react'
import CollectionCard from './CollectionCard'
import useStoreCategories from '../../store/useStoreCategories'

const Collection = () => {
    const {categories} = useStoreCategories()
  return (
    <section className="mt-10 bg-base-100 pt-5 space-y-10" id='collection'>
    <div className="">
      <h1 className="text-center text-3xl font-bold">Our Collection</h1>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
       {categories.map((collection)=>(
        <CollectionCard key={collection.id} collection={collection} />
       ))}
    </div>
  </section>
  )
}

export default Collection