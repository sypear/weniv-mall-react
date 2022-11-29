import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage/ProductImage';
import ProductName from './ProductName/ProductName';
import ProductLikeButton from './ProductLikeButton/ProductLikeButton';
import ProductPrice from './ProductPrice/ProductPrice';
import { Link } from 'react-router-dom';

const CardItem = styled.li`
  position: relative;
  width: 380px;
  cursor: pointer;
`;

export default function Card({item, pageType}) {
  return (
    <CardItem>
      <ProductImage thumbnailImg={item.thumbnailImg} widthSize="100%" stockCount={item.stockCount} pageType={pageType} />
      <ProductName productName={item.productName} />
      <ProductLikeButton />
      <ProductPrice price={item.price} />
    </CardItem>
  )
}
