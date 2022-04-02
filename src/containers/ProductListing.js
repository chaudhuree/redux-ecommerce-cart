import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/action/actions';
import ProductComponent from './ProductComponent';

export default function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  console.log(products);

  const fetchData= async()=>{
     const response = await axios.get('https://fakestoreapi.com/products').catch(err=>{
        console.log(err);
      });
      console.log(response.data);
      dispatch(setProducts(response.data));
  }
  useEffect(() => { 
    fetchData();
  }, []);

  return (
    <div className='ui grid container'>
      {Object.keys(products).length === 0 ? (
      
        <div><div></div><div></div><div></div>...Loading</div>
      ) :
    <ProductComponent/>
       } </div>
  )
}
