import React from 'react'
import styled from 'styled-components';

const ProductThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid var(--button-border-color);
  border-radius: 10px;
`

export default function ProductImage({thumbnailImg}) {
  const thubnailImgURL = `https://test.api.weniv.co.kr/${thumbnailImg}`;

  return (
    <>
      <ProductThumbnailImage src={thubnailImgURL} alt="" />
    </>
  )
}
