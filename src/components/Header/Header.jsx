import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding: 80px 50px;
  color: var(--white);
  background-color: var(--text-color);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>Weniv Mall</h1>
      </Link>
    </HeaderWrapper>
  )
}
