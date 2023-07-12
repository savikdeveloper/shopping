import { useContext } from "react";
import { ShopContext } from "../context";

export default function(props) {
  const {id, name, price, quantity, incrementQuantity, decrementQuantity} = props;
  const {example} = useContext(ShopContext);
  console.log(example);
  return(
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a className="waves-effect waves-light btn btn_q" onClick={() => incrementQuantity(id)}>
          <i className="material-icons left">add_circle</i>
          add
        </a>
        <a className="waves-effect waves-light btn btn_q" style={{marginLeft: 10}} onClick={() => decrementQuantity(id)}>
          <i className="material-icons left">remove_circle</i>
          remove
        </a>
        <a className="waves-effect waves-light btn btn_q" style={{marginLeft: 10}}    onClick={() => props.removeFromBasket(id)}>
          <i className="material-icons basket-delete">delete_forever</i>
        </a>
      </span>
    </li>
  )
}