import React from 'react';
import styled from 'styled-components';
import EmptyIcon from '../../assets/images/empty-box.png';

const Wrapper = styled.section`
  text-align: center;
`;

const ErrorIcon = styled.img`
  width: 200px;
  margin-bottom: 50px;
`;

const ErrorText = styled.p`
  font-size: 18px;
  line-height: 40px;

  & strong {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-emphasis-color);
  }
`;

const NotProductPage = () => {
  return (
    <Wrapper>
      <h1 className="sr-only">요청한 상품을 찾을 수 없습니다.</h1>
      <ErrorIcon src={EmptyIcon} alt="" />
      <ErrorText>
        <strong>존재하지 않는 상품입니다.</strong> <br />
        상단의 'Weniv Mall'을 클릭하면 메인 페이지로 갈 수 있습니다.
      </ErrorText>
    </Wrapper>
  );
}

export default NotProductPage;
