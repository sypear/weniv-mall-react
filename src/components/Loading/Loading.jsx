import React from 'react';
import styled from 'styled-components';
import LoadingIcon from "../../../src/assets/images/loading.gif";

const Wrapper = styled.section`
  text-align: center;

  & p {
    font-size: 18px;
  }
`;

const LoadingImage = styled.img`
  width: 150px;
  margin-bottom: 100px;
`;

const Loading = () => {
  return (
    <Wrapper>
      <h2 className="sr-only">페이지 로딩 중</h2>
      <LoadingImage src={LoadingIcon} alt="페이지 로딩 중" />
      <p>페이지가 로딩중입니다. 잠시만 기다려주세요.</p>
    </Wrapper>
  );
}

export default Loading;
