import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.productReducer.products);
  // console.log(  `products: ${products}`);

  return products.map((product) => {
    const { id, title, price, category, image } = product;

    return (
      <div className="four wide column" key={id}>
        
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
          
          <Link to={`/product/${id}`}>
          product details
        </Link>
      </div>
    );
  });
}

export default ProductComponent;
