import React from 'react'
import styled from 'styled-components'

const Price = styled.strong`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;

  & > span {
    margin-left: 2px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export default function ProductPrice({price}) {
  return (
    <Price>
      {price}<span>원</span>
    </Price>
  )
}
