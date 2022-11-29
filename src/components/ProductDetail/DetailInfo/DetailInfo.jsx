import React from 'react'
import styled from 'styled-components';
import CartButton from '../../Buttons/CartButton/CartButton';
import FillButton from '../../Buttons/FillButton/FillButton';
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import DropdownButton from '../../Buttons/DropdownButton/DropdownButton';
import AmountButton from '../../Buttons/AmountButton/AmountButton';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.h2`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 107px;

  & span {
    font-size: 16px;
  }
`;

const ShippingType = styled.p`
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--text-sub-color);
  border-bottom: 2px solid var(--border-sub-color);
`;

const DropDown = styled.ul`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--border-sub-color);
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  & h2 {
    font-size: 18px;
    color: var(--text-color);
  }
`

const FinalPriceInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.strong`
  margin-right: 12px;
  font-size: 18px;
  color: var(--text-sub-color);

  & span {
    font-weight: 700;
    color: var(--text-emphasis-color);
  }
`

const FinalPrice = styled.strong`
  font-size: 36px;
  font-weight: 700;
  color: var(--text-emphasis-color);

  & span {
    font-size: 18px;
    font-weight: 400;
  }
`

const SelectButtons = styled.div`
  display: flex;
  gap: 6px;
`;

export default function DetailInfo({productData, pageType}) {
  return (
    <Wrapper>
      <ProductName>{{...productData[0]}.productName}</ProductName>
      <Price>{{...productData[0]}.price}<span>원</span></Price>
      <ShippingType>
        택배배송 /
        {
          {...productData[0].shippingFee} === 0 ?
          ' 무료배송'
          : ` ${{...productData[0]}.shippingFee}원`
        }
      </ShippingType>
      <DropdownButton pageType={pageType}>
        {
          productData[0].option.map(item => (
            <li key={item.id}>
              {item.optionName}
              {
                item.additionalFee === 0 ?
                null :
                ` (${item.additionalFee}원)`
              }
            </li>
          ))
        }
      </DropdownButton>
      <PriceInfo>
        <h2>총 상품 금액</h2>
        <FinalPriceInfo>
          <Quantity>총 수량 <span>1</span>개</Quantity>
          <FinalPrice>13500<span>원</span></FinalPrice>
        </FinalPriceInfo>
      </PriceInfo>
      <SelectButtons>
        <FillButton pageType={pageType}>바로구매</FillButton>
        <CartButton />
        <LikeButton>좋아요</LikeButton>
      </SelectButtons>
    </Wrapper>
  )
}
