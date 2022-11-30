import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 990px;
`;

const ProductDetailPage = () => {
  const id = useLocation().pathname.slice(1);
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
        isGetData ? <ProductDetail id={id} pageType='page' productData={productData} /> : <div>로딩 중</div>
      }
    </Wrapper>
  );
}

export default ProductDetailPage;
