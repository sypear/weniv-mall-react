import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding: 80px 0;
  color: var(--text-color);
  font-size: 40px;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
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
