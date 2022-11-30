import React from 'react'
import styled from 'styled-components'

const TextProductName = styled.strong`
  display: block;
  width: 90%;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
`;

export default function ProductName({ productName }) {
  return (
    <TextProductName className='ellipsis'>
      {productName}
    </TextProductName>
  )
}
