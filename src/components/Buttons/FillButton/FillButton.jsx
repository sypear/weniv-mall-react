import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 308px;
  padding: 19px 119px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: var(--white);
  background-color: var(--main-color);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default function FillButton() {
  return (
    <Button>바로 구매</Button>
  )
}
