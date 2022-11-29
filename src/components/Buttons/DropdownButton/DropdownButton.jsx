import React, { useState } from 'react';
import styled from 'styled-components';
import DownIcon from '../../../assets/images/icon-Triangle-down.svg';

const Wrapper = styled.div`
  margin-bottom: 30px;
  border-bottom: 2px solid var(--border-sub-color);
`;

const Button = styled.button`
  width: 100%;
  padding: 11px 0 11px 14px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: var(--text-sub-color);
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  background: url(${DownIcon}) no-repeat 96% center;
`;

const List = styled.ul`
  position: absolute;
  display: block;
  width: ${props => props.pageType === 'page' ? '560px;' : '440px;'};
  padding: 9px 8px;
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  background-color: var(--white);
  z-index: 10;
`;

const Item = styled.li`
  padding: 6px 0 6px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--item-hover-color);
  }
`

const Dropdown = ({pageType}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>옵션을 선택하세요.</Button>
      {
        isOpen ?
        (
          <List pageType={pageType}>
            <Item>밍</Item>
            <Item>믹</Item>
          </List>
        )
        : <></>
      }
    </Wrapper>
  );
}

export default Dropdown;
