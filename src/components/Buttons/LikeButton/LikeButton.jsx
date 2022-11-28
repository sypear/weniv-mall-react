import React from 'react'
import styled from 'styled-components'
import HeartOffIcon from '../../../assets/images/icon-heart.svg';
import HeartOnIcon from '../../../assets/images/icon-heart-on.svg';

const Button = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  background: url(${HeartOffIcon}) no-repeat center;
`;

export default function LikeButton() {
  return (
    <Button />
  )
}
