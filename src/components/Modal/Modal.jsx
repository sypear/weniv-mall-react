import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductModal from './ProductModal/ProductModal';
import { data } from '../../database/data';
import CloseIcon from '../../assets/images/icon-delete.svg';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 990px;
  height: 700px;
  padding: 60px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  overflow-y: scroll;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 20px;
  right: 20px;
  background: no-repeat url(${CloseIcon}) center;
`;

const Modal = () => {
  const id = useLocation().pathname.slice(1);
  const productData = data.filter(item => item.id === +id);
  const navigate = useNavigate();

  return (
    <Overlay>
      <ModalWrapper>
        <ProductModal productData={productData} />
        <CloseButton onClick={() => navigate(-1)} />
        </ModalWrapper>
    </Overlay>
  );
}

export default Modal;
