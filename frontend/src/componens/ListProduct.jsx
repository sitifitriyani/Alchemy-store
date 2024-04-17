import { Minus, Plus, Trash } from 'lucide-react';
import { useState } from 'react';
import Checkout from './Checkout'; // Import komponen Checkout yang baru saja dibuat

function ListProduct({ cartItems, onClose }) {
  const [cart, setCart] = useState(cartItems);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // State untuk menentukan apakah checkout sedang terbuka

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="cart-popup">
      <div className="header-cart flex justify-between items-center mb-4"> 
        <h2 className="text-lg font-semibold">Daftar Produk dalam Keranjang</h2>
        <button className="close text-sm" onClick={onClose}>close</button>
      </div>

      <ul>
        {cart.map((product, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <img src={product.image} alt={product.nama} className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">Rp {product.price} - Quantity: {product.quantity}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => increaseQuantity(index)}><Plus size={18} /></button>
              <button onClick={() => decreaseQuantity(index)}><Minus size={18} /></button>
              <button onClick={() => removeFromCart(index)}><Trash size={18} /></button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Total: Rp {totalPrice}</h3>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2" onClick={toggleCheckout}>
          Checkout & Bayar
        </button>
      </div>

      {/* Render Checkout jika isCheckoutOpen bernilai true */}
      {isCheckoutOpen && <Checkout total={totalPrice} onClose={toggleCheckout} />}
    </div>
  );
}

export default ListProduct;
