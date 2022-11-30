import React from 'react'
import styled from 'styled-components'
import PlusIcon from '../../../assets/images/plus-icon.png'
import MinusIcon from '../../../assets/images/minus-icon.png'

const Wrapper = styled.div`
  display: flex;
  width: 122px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid var(--button-border-color);
`;

const MinusButton = styled.button`
  width: 39px;
  background: no-repeat url(${MinusIcon}) center / 16px;
  overflow: hidden;
  text-indent: -99999px;
`;

const Amount = styled.div`
  flex: 1;
  border-left: 1px solid var(--button-border-color);
  border-right: 1px solid var(--button-border-color);

  & input {
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    border: none;
  }
`;

const PlusButton = styled.button`
  width: 39px;
  background: no-repeat url(${PlusIcon}) center / 16px;
  overflow: hidden;
  text-indent: -99999px;
`;

export default function AmountButton({ onChangeAmount, stockCount, amount }) {
  const handleSubtractAmount = () => {
    if (amount - 1 < 1) {
      alert('수량은 1개 이상이어야 합니다.');
      return;
    }

    onChangeAmount(amount - 1);
  }

  const handleAddAmount = () => {
    if (amount + 1 > stockCount) {
      alert('재고보다 많은 수량은 선택할 수 없습니다.');
      return;
    }

    onChangeAmount(amount + 1);
  }

  const handleChangeAmount = (e) => {
    if (parseInt(e.target.value) > stockCount) {
      alert('재고보다 많은 수량은 선택할 수 없습니다.');
      return;
    }

    onChangeAmount(parseInt(e.target.value));
  }

  return (
    <Wrapper>
      <MinusButton onClick={handleSubtractAmount}> - </MinusButton>
      <Amount>
        <label htmlFor="input-amount" className="sr-only">선택 수량</label>
        <input type="number" id="input-amount" min="1" max={stockCount} value={amount} onChange={(e) => handleChangeAmount(e)} />
      </Amount>
      <PlusButton onClick={handleAddAmount}> + </PlusButton>
    </Wrapper>
  )
}
