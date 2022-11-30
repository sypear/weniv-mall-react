import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import { Link, useLocation } from 'react-router-dom';

const ProductList = styled.ul`
  width: 1260px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
`;

export default function HomePage({ productsData }) {
  const location = useLocation();

  return (
    <>
      <ProductList>
        {
          productsData.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} state={{ background: location }}>
              <Card item={item} pageType='home' />
            </Link>
          ))
        }
      </ProductList>
      <Cart />
    </>
  )
}
