import React from 'react'
import ProductItem from './ProductItem';

function ProductList(props) {
  const {products = [], addToBasket} = props;

  if(!products.length){
    return <h3>Nothing Here</h3>
  }

  return (
    <div className="products">
      {products.map(item => (
        <ProductItem key={item.id} {...item} addToBasket={addToBasket}/>
      ))}
    </div>  
  )
}
export default ProductList;
