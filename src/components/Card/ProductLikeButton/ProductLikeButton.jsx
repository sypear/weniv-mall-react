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
`;

const ProductLikeButton = () => {
  const [isLike, setIsLike] = useState(false);

  const handleProductLike = (e) => {
    e.preventDefault(); // 좋아요 버튼 클릭시 모달창이 열리지 않도록 하기 위해 사용
    setIsLike(!isLike);
  }

  return (
    <LikeButton onClick={(e) => handleProductLike(e)} isLike={isLike} />
  );
}

export default ProductLikeButton;
