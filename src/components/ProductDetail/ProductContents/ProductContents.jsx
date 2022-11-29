import React from 'react';
import styled from 'styled-components';
import ContnetsImage from '../../../assets/images/노트북-파우치-제품-소개.png'

const ProductContents = ({detailInfoImage, productName}) => {
  const images = detailInfoImage.map(image => 'https://test.api.weniv.co.kr/' + image);

  return (
    <>
      {
        images.map((image, index) => (
          <img key={image} src={image} alt={`${productName} 상세 이미지 ${index + 1}`}></img>
        ))
      }
    </>
  );
}

export default ProductContents;
