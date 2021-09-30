import React from "react";
import ProductItem from "./components/ProductItem";
import type { Product } from "../../../../state";

interface Props {
  productsArray: Product[];
}

export default function ProductsList(props: Props) {
  return (
    <ul className="productsList">
      {props.productsArray.map((item: any) => (
        <ProductItem
          key={item.id}
          id={item.id}
          imgUrl={item.imageUrl}
          productName={item.name}
          productDescription={`Size: Width: ${item.size.width} Height: ${item.size.height}`}
          productCount={`Count: ${item.count}`}
        />
      ))}
    </ul>
  );
}
