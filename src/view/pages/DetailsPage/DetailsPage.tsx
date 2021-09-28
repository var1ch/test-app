import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductSelector } from "../../../state";
import { Link, useHistory } from "react-router-dom";
import { setSelectedProduct } from "../../../state";
import styled from "styled-components";

const StyledDetailsPage = styled.div`
  img {
    width: 380px;
  }
  .productName {
    font-weight: bold;
  }
`;

export default function DetailsPage() {
  const browserHistory = useHistory();
  const backListener = browserHistory.listen((loc) => {
    if (browserHistory.action === "POP") {
      dispatch(
        setSelectedProduct({
          id: selectedProduct?.id ? selectedProduct.id : 0,
          changes: false,
        }),
      );
    }
  });
  useEffect(() => {
    return backListener();
  });
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectedProductSelector);
  return (
    <StyledDetailsPage>
      <Link
        to="/"
        onClick={() =>
          dispatch(
            setSelectedProduct({
              id: selectedProduct?.id ? selectedProduct.id : 0,
              changes: false,
            }),
          )
        }
      >
        Back
      </Link>
      <h1>Details Page</h1>
      <span className={"productName"}>{selectedProduct?.name}</span>
      <br />
      <img src={selectedProduct?.imageUrl} alt="" />
      <br />
      <p>{`
        Count: ${selectedProduct?.count}
        Sizes: Width: ${selectedProduct?.size.width} Height: ${selectedProduct?.size.height}
        Weight: ${selectedProduct?.weight}`}</p>
      <br />
    </StyledDetailsPage>
  );
}
