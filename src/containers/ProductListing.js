import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';

export default function ProductListing() {
  const products = useSelector(state => state.productReducer.products);
  console.log(products);

  const fetchData= async()=>{
     const response = await axios.get('https://fakestoreapi.com/products').catch(err=>{
        console.log(err);
      });
      console.log(response.data);
  }
  useEffect(() => { 
    fetchData();
  }, []);

  return (
    <div className='ui gird container'><ProductComponent/></div>
  )
}
