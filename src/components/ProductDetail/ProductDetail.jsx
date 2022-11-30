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

const ProductDetail = ({ pageType, productData = {} }) => {
  return (
    <Wrapper>
      {
        <>
          <Top>
            <ProductImage
              thumbnailImg={productData.thumbnailImg}
              widthSize="400px"
              pageType="modal"
            />
            <DetailInfo
              stockCount={productData.stockCount}
              productName={productData.productName}
              price={productData.price}
              shippingFee={productData.shippingFee}
              option={productData.option}
              pageType={pageType}
            />
          </Top>
          <ProductInfo
            id={productData.id}
            pubDate={productData.pubDate}
            stockCount={productData.stockCount}
          />
          <ProductContents
            productName={productData.productName}
            detailInfoImage={productData.detailInfoImage}
          />
        </>
      }
    </Wrapper >
  );
};

export default ProductDetail;