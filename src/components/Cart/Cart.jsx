import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartIcon from '../../assets/images/icon-shopping-cart-white.svg';

const MoveButton = styled.button`
  position: absolute;
  top: 160px;
  right: -140px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--main-color) url(${CartIcon}) no-repeat center/40px 40px;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Link to="/cart">
      <MoveButton aria-label='장바구니 페이지로 이동하기' />
    </Link>
  );
}

export default Cart;
