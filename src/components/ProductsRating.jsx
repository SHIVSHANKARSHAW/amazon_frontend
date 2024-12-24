import React from 'react'
import { StarIcon } from "@heroicons/react/24/outline";
const ProductsRating = (props) => {
    const starNumber = props.avgRating;
    const ratingNumber = props.ratings;
  return (
    <div className='flex text-center'>
        {
            Array.from({length:starNumber},(_,i) => <StarIcon key={i} className='stroke-[#F1861F] fill-[#F1861F] h-[20px]' />)
        }
        {
            Array.from({length:5 - starNumber},(_,i) => <StarIcon key={i} className='stroke-[#F1861F] h-[20px]' />)
        }
        <span className='ml-3 text-blue-500 text-[1rem] m-auto'>{ratingNumber} Ratings</span>
    </div>
  )
}

export default ProductsRating