import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductDetail from '../ProductDetail/ProductDetail';
import CloseIcon from '../../assets/images/icon-delete.svg';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 3px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrapper = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 990px;
  height: 800px;
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

const Modal = ({ productsData }) => {
  const id = useLocation().pathname.split('/')[2];
  const productData = { ...productsData.filter(item => item.id === +id)[0] };
  const navigate = useNavigate();
  const backgroundRef = useRef(null);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const handleCloseModal = (e) => {
    if (e.target === backgroundRef.current) {
      navigate(-1);
    }
  }

  return (
    <Overlay ref={backgroundRef} onClick={handleCloseModal}>
      <ModalWrapper>
        <h2 className="sr-only">{`${productData.productName} 상품 상세 정보`}</h2>

        <ProductDetail productData={productData} pageType='modal' />
        <CloseButton onClick={() => navigate(-1)} />
      </ModalWrapper>
    </Overlay>
  );
}

export default Modal;
