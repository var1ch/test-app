import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "./ProductsList/ProductsList";
import { addProductAction, allProductsSelector } from "../../../state";
import ModalItem from "./ProductsList/components/ModalItem";
import { StyledListPage } from "./StylesListPage";

export default function ListPage() {
  const products = useSelector(allProductsSelector);
  const [sortType, setSortType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();

  const onDeclineHandler = () => {
    setOpenModal(false);
  };
  const onConfirmHandler = () => {
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
        setOpenModal(false);
      });
  };

  return (
    <StyledListPage>
      <h1 className="title">Products List</h1>
      <button
        className="regularButton"
        onClick={() =>
          setSortType(sortType === "byCount" ? "byName" : "byCount")
        }
      >
        Sort by Name
      </button>
      <button
        className="regularButton"
        onClick={() =>
          setSortType(sortType === "byName" ? "byCount" : "byName")
        }
      >
        Sort by Count
      </button>
      <div className="productsBlock">
        <ProductsList
          productsArray={
            sortType === "byName"
              ? products.sort((a, b) => (a.name < b.name ? 1 : -1))
              : sortType === "byCount"
              ? products.sort((a, b) => a.count - b.count)
              : products
          }
        />
        <hr />
        <button className="regularButton" onClick={() => setOpenModal(true)}>
          New Product
        </button>
        <ModalItem openModal={openModal} onClose={onDeclineHandler}>
          <>
            <span className="modalTitle">Add Product?</span> <br />
            <button className="modalButton" onClick={onConfirmHandler}>
              Add
            </button>
            <button className="modalButton" onClick={onDeclineHandler}>
              Cancel
            </button>
          </>
        </ModalItem>
      </div>
    </StyledListPage>
  );
}
