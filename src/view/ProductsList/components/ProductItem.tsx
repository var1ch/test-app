import React from "react";

interface Props {
  imgUrl: string;
  productName: string;
  productDescription: string;
  productAmount: number;
}

export default function ProductItem({
  imgUrl,
  productName,
  productDescription,
  productAmount,
}: Props) {
  return (
    <li className="productItem">
      <div className="product">
        <img src={imgUrl} alt="product" />
        <span className="productName">{productName}</span>
        <p className="productDescription">{productDescription}</p>
        <span className="productAmount">{productAmount}</span>
      </div>
    </li>
  );
}
