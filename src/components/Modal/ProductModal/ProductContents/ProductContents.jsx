import React from 'react';
import styled from 'styled-components';
import ContnetsImage from '../../../../assets/images/노트북-파우치-제품-소개.png'

const ProductContents = ({productName}) => {
  return (
    <img src={ContnetsImage} alt={`${productName} 상품 상세 소개`} />
  );
}

export default ProductContents;
