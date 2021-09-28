import React from "react";
import ProductItem from "./components/ProductItem";
import { StyledProductsList } from "./StyledProductsList";

export default function ProductsList(props: any) {
  return (
    <StyledProductsList>
      {props.arr.map((item: any) => (
        <ProductItem
          id={item.id}
          imgUrl={item.imageUrl}
          productName={item.name}
          productDescription={`Size: Width: ${item.size.width} Height: ${item.size.height}`}
          productCount={`Count: ${item.count}`}
        />
      ))}
    </StyledProductsList>
  );
}
