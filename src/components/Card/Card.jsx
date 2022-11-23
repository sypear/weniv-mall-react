import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage/ProductImage';
import ProductName from './ProductName/ProductName';
import ProductLikeButton from './ProductLikeButton/ProductLikeButton';
import ProductPrice from './ProductPrice/ProductPrice';

const CardItem = styled.li`
  position: relative;
  width: 380px;
  cursor: pointer;
`;

export default function Card({...item}) {
  return (
    <CardItem>
      <ProductImage thumbnailImg={item.thumbnailImg} />
      <ProductName productName={item.productName} />
      <ProductLikeButton />
      <ProductPrice price={item.price} />
    </CardItem>
  )
}
