import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding: 50px;
  color: var(--white);
  background-color: var(--text-color);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Weniv Mall</h1>
    </HeaderWrapper>
  )
}
