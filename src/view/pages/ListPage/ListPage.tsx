import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../ProductsList/ProductsList";
import { addProductAction } from "../../../state";
import styled from "styled-components";
import { allProductsSelector } from "../../../state";

const StyledListPage = styled.div`
  button.addProduct {
    margin-bottom: 25px;
  }
`;

export default function ListPage() {
  const products = useSelector(allProductsSelector);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  return (
    <StyledListPage>
      <h1>Products List</h1>
      <div className="productsBlock">
        <ProductsList arr={products} />
        <button
          className={"addProduct"}
          onClick={() =>
            fetch(`https://fakestoreapi.com/products/${number}`)
              .then((res) => res.json())
              .then((json) => {
                setNumber((prev) => prev + 1);
                dispatch(
                  addProductAction({
                    id: json.id,
                    isSelected: false,
                    imageUrl: json.image,
                    name: json.title,
                    count: 2 + number,
                    size: {
                      width: 3 + number,
                      height: 3 + number,
                    },
                    weight: "300g",
                  }),
                );
              })
          }
        >
          New Product
        </button>
      </div>
    </StyledListPage>
  );
}
