import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetailPage = () => {
    const location = useLocation();
    const id = location.pathname.slice(1);

    return (
        <div>{id}번 상품의 상품정보 페이지</div>
    );
}

export default ProductDetailPage;
