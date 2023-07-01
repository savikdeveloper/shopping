import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const {order} = props;

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity;
  }, 0);
  return(
    <ul className="collection basket-list">
      <li className="collection-item active">
        Basket
      </li>
      {order.length ? order.map(item => {
        return(
          <BasketItem key={item.id} {...item}/>
        )
      }) : <li className="collection-item">Basket is empty</li>}
      <li className="collection-item active">
        Total Cost: {totalPrice} <b>$</b>
      </li>
      <i className="material-icons basket-close" onClick={props.handleBasketShow}>close</i>
    </ul>
  )
}