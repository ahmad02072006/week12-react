import { useEffect, useState } from 'react';
import { products } from '../data/products';

const money = (n) => `$${n.toFixed(2)}`;

function ProductCard({ product, qtyInCart, onAdd, onRemove }) {
  return (
    <article className="product">
      <div className="product-image-wrap">
        <img src={product.image} alt={`${product.name} sneaker`} loading="lazy" />
        <span className="discount-badge">{product.discount}</span>
      </div>
      <div className="product-details">
        <div>
          <h3>{product.name}</h3>
          <p className="price">{money(product.price)}</p>
        </div>
        <button
          className="add-button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
      <div className="product-actions">
        {qtyInCart > 0 && (
          <button className="link-btn" onClick={() => onRemove(product.id)}>
            Remove from cart
          </button>
        )}
        {qtyInCart > 0 && <small aria-live="polite">In cart: {qtyInCart}</small>}
      </div>
    </article>
  );
}

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-info">
        <strong>{item.name}</strong>
        <span>{money(item.price)} each</span>
      </div>
      <div className="qty">
        <button onClick={() => onDecrease(item.id)} aria-label={`Decrease ${item.name}`}>−</button>
        <span>{item.qty}</span>
        <button onClick={() => onIncrease(item.id)} aria-label={`Increase ${item.name}`}>+</button>
      </div>
      <span className="line-total">{money(item.price * item.qty)}</span>
    </li>
  );
}

function ShoppingCart({ onCartCountChange }) {
  // State: an ARRAY of cart items -> { ...product, qty }
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function increase(id) {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  }

  function decrease(id) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0) // qty 0 removes the item
    );
  }

  // Derived values: computed from state, NOT stored in state
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  useEffect(() => {
    onCartCountChange(totalItems);
  }, [onCartCountChange, totalItems]);

  return (
    <div className="shop">
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            qtyInCart={cart.find((i) => i.id === p.id)?.qty ?? 0}
            onAdd={addToCart}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <aside id="cart" className="cart" aria-label="Shopping cart">
        <h3>Your Cart ({totalItems})</h3>
        {cart.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} onIncrease={increase} onDecrease={decrease} />
              ))}
            </ul>
            <div className="total">
              <span>Total</span>
              <strong>{money(totalPrice)}</strong>
            </div>
            <button className="btn btn-ghost full" onClick={() => setCart([])}>
              Clear cart
            </button>
          </>
        )}
      </aside>
    </div>
  );
}

export default ShoppingCart;