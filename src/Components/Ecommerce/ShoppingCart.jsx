import React, { useState } from 'react';
import styles from './ShoppingCart.module.css'
import Navbar from '../Pages/Navbar';
const ShoppingCart = () => {
  const [isActive, setIsActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];

  const openShopping = () => {
    setIsActive(true);
  };

  const closeShopping = () => {
    setIsActive(false);
  };

  const addToCart = (productIndex) => {
    const selectedProduct = products[productIndex];

    // Check if the product is already in the cart
    const existingCartItem = cartItems.find((item) => item.id === selectedProduct.id);

    if (existingCartItem) {
      // If the product is already in the cart, increase its quantity
      existingCartItem.quantity += 1;
    } else {
      // If it's not in the cart, add it with quantity 1
      const newCartItem = { ...selectedProduct, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const changeQuantity = (productIndex, newQuantity) => {
    if (newQuantity === 0) {
      // Remove the item from the cart if quantity is 0
      setCartItems(cartItems.filter((item) => item.id !== products[productIndex].id));
    } else {
      // Update quantity and price
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity = newQuantity;
      updatedCartItems[productIndex].price = newQuantity * products[productIndex].price;
      setCartItems(updatedCartItems);
    }
  };

  // Calculate the total price and quantity
  let totalCount = 0;
  let total = 0;
  cartItems.forEach((item) => {
    totalCount += item.quantity;
    total += item.price;
  });

  return (
    <>
    <Navbar/>
    <div className={`${styles.container} ${isActive ? styles.active : ''}`} >
      <header>
        <h1>Your Shopping Cart</h1>
        <div className={styles.shopping} onClick={openShopping}>
          <img src="image/shopping.svg" alt="Shopping Cart" />
          <span className={styles.quantity}>{totalCount}</span>
        </div>
      </header>
      <div className={styles.list}>
        {/* Product listing */}
        {products.map((product, index) => (
          <div className={styles.item} key={product.id}>
            <img src={`image/${product.image}`} alt={product.name} />
            <div className={styles.title}>{product.name}</div>
            <div className={styles.price}>{product.price.toLocaleString()}</div>
            <button onClick={() => addToCart(index)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <div className={styles.card}>
        <h1>Card</h1>
        <ul className={styles.listCard}>
          {/* Cart items */}
          {cartItems.map((item, index) => (
            <li key={item.id}>
              <div>
                <img src={`image/${item.image}`} alt={item.name} />
              </div>
              <div>{item.name}</div>
              <div>{item.price.toLocaleString()}</div>
              <div>
                <button onClick={() => changeQuantity(index, item.quantity - 1)}>-</button>
                <div className={styles.count}>{item.quantity}</div>
                <button onClick={() => changeQuantity(index, item.quantity + 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.checkOut}>
          <div className={styles.total}>{total.toLocaleString()}</div>
          <div className={styles.closeShopping} onClick={closeShopping}>Close</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;
