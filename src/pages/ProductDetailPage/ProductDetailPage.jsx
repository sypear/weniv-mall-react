import React from 'react';
import { data } from '../../database/data';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 990px;
`;

const ProductDetailPage = () => {
  const id = useLocation().pathname.slice(1);
  const productData = data.filter(item => item.id === +id);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ProductDetail productData={productData} pageType='page' />
    </Wrapper>
  );
}

export default ProductDetailPage;
