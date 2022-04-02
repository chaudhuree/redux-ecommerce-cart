import React from 'react';
import { useSelector } from 'react-redux';

function ProductListing() {
  const products = useSelector(state => state.productReducer.products);
  console.log(products);
  return (
    <div className='ui gird container'>ProductListing</div>
  )
}

export default ProductListing