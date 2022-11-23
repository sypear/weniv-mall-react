import React, { useState } from 'react';
import styled from 'styled-components';
import heartOffIcon from '../../../assets/images/icon-heart.svg';
import heartOnIcon from '../../../assets/images/icon-heart-on.svg';

const LikeButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 43px;
  width: 22px;
  height: 22px;
  background: no-repeat center ${(props) => props.isLike ? `url(${heartOnIcon})` : `url(${heartOffIcon})`};
  cursor: pointer;
`;

const ProductLikeButton = () => {
  const [isLike, setIsLike] = useState(false);

  const handleProductLike = () => {
    setIsLike(!isLike);
  }

  return (
    <LikeButton onClick={handleProductLike} isLike={isLike} />
  );
}

export default ProductLikeButton;
