import React from 'react'
import styled from 'styled-components';
import ProductImage from '../../Card/ProductImage/ProductImage';
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

const ProductModal = ({productData}) => {
  return (
    <Wrapper>
      <Top>
        <ProductImage thumbnailImg={{...productData[0]}.thumbnailImg} widthSize='400px' />
        <DetailInfo {...productData} />
      </Top>
      <ProductInfo pubDate={{...productData[0]}.pubDate} id={{...productData[0]}.id} stockCount={{...productData[0]}.stockCount} />
      <ProductContents productName={{...productData[0]}.productName} />
    </Wrapper>
  );
};

export default ProductModal;