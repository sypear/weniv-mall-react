import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../components/Buttons/DropdownButton/DropdownButton';
import FillButton from '../../components/Buttons/FillButton/FillButton';
import Line from '../../components/Line/Line';

const Wrapper = styled.section`
  width: 1260px;
  color: var(--text-color);
`;

const Title = styled.h2`
  margin-bottom: 60px;
  font-size: 36px;
  font-weight: bold;
  line-height: 44px;
  text-align: center;
`;

const CouponWrapper = styled.div`
  margin-bottom: 40px;
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
`;

const CartPage = () => {
  return (
    <Wrapper>
      <Title>장바구니/결제</Title>

      <CouponWrapper>
        <SubTitle>쿠폰 사용</SubTitle>
        <Line margin='16px' />
        <div>쿠폰 드롭다운 위치</div>
      </CouponWrapper>

      <SubTitle>주문 상품</SubTitle>
      <Line margin='16px' />
      <FillButton text='선택 삭제하기' />
      <div>장바구니에 담긴 상품이 없습니다</div>
      <FillButton text='선택 상품 주문하기' />

      <button>홈</button>
    </Wrapper>
  );
}

export default CartPage;
