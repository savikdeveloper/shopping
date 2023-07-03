import {useState, useEffect} from 'react'
import {API_URL, API_KEY} from '../config';
import Loader from './Loader';
import ProductList from './ProductList';
import Card from './Card';
import BasketList from './BasketList';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState();

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if(itemIndex < 0){
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem]);
    } else{
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else{
          return item;
        }
      });

      setOrder(newOrder);
    }
  }
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }
  const removeFromBasket = (itemID) =>{
    const newOrder = order.filter(item => item.id !== itemID)
    setOrder(newOrder)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      data.featured && setProducts(data.featured);
      setLoading(false);
    });
  }, []);

  return (
    <div className='container content'>
      <Card quantity={order.length} handleBasketShow={handleBasketShow}/>
      {loading ? <Loader /> : <ProductList products={products} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/>}
    </div>
  )
}
export default Shop;
