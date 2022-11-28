import React from 'react'
import styled from 'styled-components';

const ProductThumbnailImage = styled.img`
  width: ${props => props.widthSize};
  border: 1px solid var(--button-border-color);
  border-radius: 10px;
`

export default function ProductImage({thumbnailImg, widthSize}) {
  console.log('믹', thumbnailImg);

  const thubnailImgURL = `https://test.api.weniv.co.kr/${thumbnailImg}`;

  return (
    <>
      <ProductThumbnailImage src={thubnailImgURL} alt="" widthSize={widthSize} />
    </>
  )
}
