import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  ${props => props.pageType === 'page' ? 'flex: 1;' : null}
  ${props => props.pageType !== 'page' ? 'width: 308px;' : null}
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: var(--white);
  background-color: ${props => props.isSoldOut ? 'var(--button-border-color)' : 'var(--main-color)'};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  ${props => props.isSoldOut ? 'pointer-events: none;' : null};
`;

export default function FillButton({ isSoldOut, pageType, text }) {

  return (
    <Button pageType={pageType} isSoldOut={isSoldOut}>{text}</Button>
  )
}
