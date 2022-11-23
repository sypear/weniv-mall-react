import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '../../assets/images/icon-shopping-cart-white.svg';

const ShoppingCartLink = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--main-color) url(${ShoppingCartIcon}) no-repeat center/40px 40px;
`;

const ShoppingCart = () => {
  return (
    <ShoppingCartLink aria-label='장바구니로 이동하기' />
  );
}

export default ShoppingCart;
