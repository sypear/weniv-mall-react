import React from 'react';

const ProductContents = ({ detailInfoImage = [], productName }) => {
  const images = detailInfoImage.map(image => 'https://test.api.weniv.co.kr/' + image);

  return (
    <>
      <div>{productName}</div>
      {
        images.map((image, index) => (
          <img key={image} src={image} alt={`${productName} 상세 이미지 ${index + 1}`}></img>
        ))
      }
    </>
  );
}

export default ProductContents;
