import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import CartButton from '../../Buttons/CartButton/CartButton';
import FillButton from '../../Buttons/FillButton/FillButton';
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import DropdownButton from '../../Buttons/DropdownButton/DropdownButton';
import AmountButton from '../../Buttons/AmountButton/AmountButton';
import Line from '../../Line/Line';
import { render } from '@testing-library/react';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const Price = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 107px;
  font-size: 24px;
  font-weight: 700;

  & span {
    font-size: 16px;
    font-weight: 400;
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
    font-weight: 500;
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

export default function DetailInfo({ stockCount, productName, price, shippingFee, option = [], pageType }) {
  const [isSoldOut, setIsSoldOut] = useState(stockCount === 0 ? true : false);
  const [amount, setIsAmount] = useState(1);

  const handleAmountChange = useCallback((inputAmount) => {
    setIsAmount(inputAmount);
  }, []);

  return (
    <Wrapper>
      <div>
        <ProductName>{productName}</ProductName>
        <Price>{price}<span>???</span></Price>
      </div>
      {
        isSoldOut
          ? null
          : (
            <>
              <ShippingType>
                ???????????? /
                {
                  shippingFee === 0
                    ? ' ????????????'
                    : ` ${shippingFee}???`
                }
              </ShippingType>
              <Line margin='10px' />
              <SelectButtonWrapper>
                {
                  option.length === 0
                    ? (<AmountButton onChangeAmount={handleAmountChange} stockCount={stockCount} amount={amount} />)
                    : (<DropdownButton options={option} pageType={pageType} />)
                }
              </SelectButtonWrapper>
              <Line margin='16px' />
              <PriceInfo>
                <h2>??? ?????? ??????</h2>
                <FinalPriceInfo>
                  <Quantity>
                    ??? ?????? <span>{amount ? amount : 1}</span>???
                  </Quantity>
                  <FinalPrice>
                    {amount ? amount * price : price}
                    <span>???</span>
                  </FinalPrice>
                </FinalPriceInfo>
              </PriceInfo>
            </>
          )
      }
      <ControlButonWrapper>
        <FillButton isSoldOut={isSoldOut} pageType={pageType} text={isSoldOut ? '????????? ???????????????.' : '?????? ??????'} />
        <CartButton isSoldOut={isSoldOut} />
        <LikeButton isSoldOut={isSoldOut} />
      </ControlButonWrapper>
    </Wrapper>
  )
}
