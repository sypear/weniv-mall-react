import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  ${props => props.pageType === 'home' ? 'margin-bottom: 20px;' : null};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 3px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 10;
`;

const ProductThumbnailImage = styled.img`
  position: relative;
  width: ${props => props.widthSize};
  border: 1px solid var(--button-border-color);
  border-radius: 10px;
`

const SoldOut = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 11px 116px;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  background-color: var(--text-color);
  z-index: 20;
`;

export default function ProductImage({ thumbnailImg, widthSize, stockCount, pageType }) {
  const thubnailImgURL = `https://test.api.weniv.co.kr/${thumbnailImg}`;

  return (
    <Wrapper pageType={pageType}>
      {
        stockCount === 0 ? (
          <>
            <Overlay />
            <SoldOut>SOLDOUT</SoldOut>
          </>
        ) : null
      }
      <ProductThumbnailImage src={thubnailImgURL} alt="" widthSize={widthSize} />
    </Wrapper>
  )
}
