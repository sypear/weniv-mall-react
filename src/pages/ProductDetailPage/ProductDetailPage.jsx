import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 990px;
`;

const ProductDetailPage = () => {
  const id = useLocation().pathname.slice(1);

  return (
    <Wrapper>
      <ProductDetail id={id} pageType='page' />
    </Wrapper>
  );
}

export default ProductDetailPage;
