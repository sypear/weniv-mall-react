import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 80px 50px;
  color: var(--white);
  background-color: var(--text-color);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      ⓒ Weniv
    </FooterWrapper>
  );
}

export default Footer;
