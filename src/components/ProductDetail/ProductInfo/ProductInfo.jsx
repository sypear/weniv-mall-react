import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

const InfoWrapper = styled.ul`
  display: flex;
  margin-bottom: 40px;
  border-top: 2px solid var(--border-sub-color);
  border-bottom: 2px solid var(--border-sub-color);

  & li {
    flex: 1;
    display: flex;
    flex-direction: row;
    font-size: 14px;

    & h3 {
      padding: 13px 83px 13px 12px;
      background-color: var(--bg-grey-color);
    }

    & p {
      display: flex;
      align-items: center;
      padding-left: 12px;
    }
  }
`;

const ProductInfo = ({pubDate, id, stockCount}) => {
  const productNo = pubDate.replaceAll('-', '') + id;

  return (
    <>
      <Title>상품 정보</Title>

      <InfoWrapper>
        <li>
          <h3>상품 번호</h3>
          <p>{productNo}</p>
        </li>

        <li>
          <h3>재고 수량</h3>
          <p>
            {
              stockCount === 0 ? '-' : `${stockCount}개`
            }
          </p>
        </li>
      </InfoWrapper>
    </>
  );
}

export default ProductInfo;
