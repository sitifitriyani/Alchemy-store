import { ShoppingBag } from "lucide-react";

function Cart({ countItem, onCartClick }) {
  return (
    <div className="cart-container">
      <button onClick={onCartClick}><ShoppingBag />({countItem})</button>
    </div>
  );
}

export default Cart;
