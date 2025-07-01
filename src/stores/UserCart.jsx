import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';
const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-heading" style={{ textAlign: 'center', margin: '20px 0' }}>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div className="cart-card" key={index}>
          <div className="cart-img">
            <img src={item.image} alt={item.model} />
          </div>
          <div className="cart-details">
            <h3>{item.product}</h3>
            <h2>{item.price}</h2>
            <h3>{item.model}</h3>
          </div>
          <div className="cart-actions">
            <button className="remove-btn" onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCart;
