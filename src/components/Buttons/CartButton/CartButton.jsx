import React from 'react'
import styled from 'styled-components'
import CartIcon from '../../../assets/images/icon-shopping-cart.svg'
import CartSoldOutIcon from '../../../assets/images/icon-shopping-cart-soldout.svg'

const Button = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  background: ${props => props.isSoldOut ? `var(--button-border-color) url(${CartSoldOutIcon})` : `url(${CartIcon})`} no-repeat center;
  ${props => props.isSoldOut ? 'pointer-events: none;' : null};
`;

export default function CartButton({isSoldOut}) {
  return (
    <Button isSoldOut={isSoldOut} />
  )
}
