import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import styled from 'styled-components';
import axios from 'axios';
import NotProductPage from '../NotProductPage/NotProductPage';

const Wrapper = styled.div`
  width: 990px;
`;

const ProductDetailPage = () => {
  const id = useLocation().pathname.split('/')[2];
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
    console.log(productData);
  }, []);

  return (
    <Wrapper>
      {
        isGetData
          ?
          productData ? (
            <ProductDetail id={id} pageType='page' productData={productData} />
          )
            : <NotProductPage />
          : <div>로딩 중</div>
      }
    </Wrapper>
  );
}

export default ProductDetailPage;
