import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectProduct } from '../redux/action/actions';
// import { productReducer } from './../redux/reducers/productReducer';

function ProductDetails() {
  const dispatch = useDispatch();
  let product = useSelector((state) => state.productReducer.product);
  const { image, title, price, category, description } = product;
  
  const {id} = useParams();
  const fetchSingleProduct = async (id) => {
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
  dispatch(selectProduct(response.data));
  console.log("response: ", response.data);
  }
  React.useEffect(() => {
    if(id&& id!==''){
    fetchSingleProduct(id);}
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image}  alt={category}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
export default ProductDetails