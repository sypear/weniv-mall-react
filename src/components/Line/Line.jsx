import React from 'react';
import styled from 'styled-components';

const Horizon = styled.div`
  border-bottom: 2px solid var(--border-sub-color);
  margin-bottom: ${props => props.margin};
`;

const Line = ({margin}) => {
  return (
    <Horizon margin={margin}></Horizon>
  );
}

export default Line;
