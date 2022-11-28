import React from 'react'
import styled from 'styled-components'
import CartIcon from '../../../assets/images/icon-shopping-cart.svg'

const Button = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  background: url(${CartIcon}) no-repeat center;
`;

export default function CartButton() {
  return (
    <Button />
  )
}
