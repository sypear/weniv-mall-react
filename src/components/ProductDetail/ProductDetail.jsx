import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProductImage from '../Card/ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailInfo from './DetailInfo/DetailInfo';
import ProductContents from './ProductContents/ProductContents';
import axios from 'axios';

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

const ProductDetail = ({ id, pageType }) => {
  const [isGetData, setIsGetData] = useState(false);
  const [productData, setProductData] = useState([]);

  const url = "https://test.api.weniv.co.kr/mall";

  const getProductData = async () => {
    await axios
      .get(url)
      .then(res => {
        setProductData(...[...res.data].filter(product => product.id === +id));
      })
      .catch(Error => {
        console.error(Error);
      })
  };

  useEffect(() => {
    getProductData();
    setIsGetData(true);
  }, []);

  return (
    <Wrapper>
      {
        isGetData
          ? (
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
                pubDate={productData.pubDate}
                id={productData.id}
                stockCount={productData.stockCount}
              />
              <ProductContents
                productName={productData.productName}
                detailInfoImage={productData.detailInfoImage}
              />
            </>
          ) : <div>로딩 중..</div>
      }

    </Wrapper>
  );
};

export default ProductDetail;