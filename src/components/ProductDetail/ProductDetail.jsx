import React from 'react'
import styled from 'styled-components';
import ProductImage from '../Card/ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailInfo from './DetailInfo/DetailInfo';
import ProductContents from './ProductContents/ProductContents';

const Wrapper = styled.section`
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
      <h2 className="sr-only">{`${productData.productName} 상품 상세 정보`}</h2>
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