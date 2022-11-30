import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import styled from 'styled-components';
import axios from 'axios';
import NotProductPage from '../NotProductPage/NotProductPage';
import Loading from '../../components/Loading/Loading';

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
          : <Loading />
      }
    </Wrapper>
  );
}

export default ProductDetailPage;
