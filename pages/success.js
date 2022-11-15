import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, [setCartItems, setTotalPrice, setTotalQuantities])
  

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your Order!</h2>
        <p className="email-msg">Check your email inbox for your receipt.</p>
        <p className="description">
          If you have any questions then mail us at
          <a
            className="email"
            href="mailto:aryanmathur.official@gmail.com"
          >
            aryanmathur.official@gmail.com
          </a>
        </p>
        <Link href="/">
            <button type='button' width="300px" className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
