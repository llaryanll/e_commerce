import React, { useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/Ai';
import { useStateContext } from '../context/StateContext';
import { Cart } from './';

const Navbar = () => {
  const { showCart, totalQuantities, toggleCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Himaalya Store</Link>
      </p>

      {!showCart && (
        <button
          type="button"
          className="cart-icon"
          onClick={toggleCart}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      )}

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
