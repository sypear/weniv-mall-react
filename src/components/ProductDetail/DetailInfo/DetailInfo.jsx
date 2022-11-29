import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import CartButton from '../../Buttons/CartButton/CartButton';
import FillButton from '../../Buttons/FillButton/FillButton';
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import DropdownButton from '../../Buttons/DropdownButton/DropdownButton';
import AmountButton from '../../Buttons/AmountButton/AmountButton';
import Line from '../../Line/Line';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 16px;
  color: var(--text-sub-color);
`;

const SelectButtonWrapper = styled.div`
  margin-bottom: 10px;
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

const ControlButonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export default function DetailInfo({productData, pageType}) {
  const data = productData[0];
  const [isSoldOut, setIsSoldOut] = useState(data.stockCount === 0 ? true : false);
  const [amount, setIsAmount] = useState(1);

  const handleAmountChange = useCallback((inputAmount) => {
    setIsAmount(inputAmount);
  }, []);

  return (
    <Wrapper>
      <div>
        <ProductName>{data.productName}</ProductName>
        <Price>{data.price}<span>원</span></Price>
      </div>
      {
        isSoldOut
        ? null
        : (
          <>
            <ShippingType>
              택배배송 /
              {
                data.shippingFee === 0
                ? ' 무료배송'
                : ` ${data.shippingFee}원`
              }
            </ShippingType>
            <Line margin='10px' />
            <SelectButtonWrapper>
            {
              data.option.length === 0
              ? ( <AmountButton onChangeAmount={handleAmountChange} stockCount={data.stockCount} amount={amount} /> )
              : ( <DropdownButton options={data.option} pageType={pageType} /> )
            }
            </SelectButtonWrapper>
            <Line margin='16px' />
            <PriceInfo>
              <h2>총 상품 금액</h2>
              <FinalPriceInfo>
                <Quantity>총 수량 <span>{amount}</span>개</Quantity>
                <FinalPrice>{amount * data.price}<span>원</span></FinalPrice>
              </FinalPriceInfo>
            </PriceInfo>
          </>
        )
      }
      <ControlButonWrapper>
        <FillButton isSoldOut={isSoldOut} pageType={pageType} text={isSoldOut ? '품절된 상품입니다.' : '바로 구매'} />
        <CartButton isSoldOut={isSoldOut} />
        <LikeButton isSoldOut={isSoldOut} />
      </ControlButonWrapper>
    </Wrapper>
  )
}
