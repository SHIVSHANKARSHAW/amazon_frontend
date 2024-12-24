import React from 'react'
import ProductBadge from './ProductBadge'
import ProductsRating from './ProductsRating'

const ProductDetails = ({product, ratings}) => {
  return (
    <div className='mb-1'>
        <div className="text-4xl font-medium mb-1">{product.title}</div>
        <div className="text-xl mb-1">by <span className='text-blue-500'>{product.brand}</span></div>
        {ratings &&
            <div className="text-xl mb-1"><ProductsRating avgRating={product.avgRating} ratings={product.ratings}/></div>
        }
        <div className="text-xl mb-1 font-bold">{product.attribute}</div>
        <div className="text-xl mb-2"><ProductBadge badge={product.badge}/></div>
    </div>
  )
}

export default ProductDetails