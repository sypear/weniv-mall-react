import React from 'react'
import styled from 'styled-components';
import ProductImage from '../Card/ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailInfo from './DetailInfo/DetailInfo';
import ProductContents from './ProductContents/ProductContents';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 40px;

  & img {
    margin-right: 30px;
  }
`;

const ProductDetail = ({productData, pageType}) => {
  const data = productData[0];

  return (
    <Wrapper>
      <Top>
        <ProductImage thumbnailImg={data.thumbnailImg} widthSize='400px' />
        <DetailInfo productData={productData} pageType={pageType} />
      </Top>
      <ProductInfo pubDate={data.pubDate} id={data.id} stockCount={data.stockCount} />
      <ProductContents detailInfoImage={data.detailInfoImage} productName={data.productName} />
    </Wrapper>
  );
};

export default ProductDetail;