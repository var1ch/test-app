import { createSelector } from "reselect";
import { productsAdapter } from "./slice";
import type { RootState } from "../store";

const productsSelectors = productsAdapter.getSelectors(
  (state: RootState) => state.products,
);

export const productByIdSelector = productsSelectors.selectById;

export const selectedProductSelector = createSelector(
  productsSelectors.selectAll,
  (products) => products.find((e) => e.isSelected === true),
);

export const allProductsSelector = createSelector(
  productsSelectors.selectAll,
  (products) => products,
);
