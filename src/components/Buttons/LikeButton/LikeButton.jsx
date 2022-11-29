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
  ${props => props.isSoldOut ? 'pointer-events: none;' : null};
  overflow: hidden;
  text-indent: -99999px;
`;

export default function LikeButton({isSoldOut}) {
  return (
    <Button isSoldOut={isSoldOut}>좋아요</Button>
  )
}
