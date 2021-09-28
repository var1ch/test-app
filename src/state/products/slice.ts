import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product, ChangesPayload } from "./types";

export const productsAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

const productsSlice = createSlice({
  name: "counter",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    addProductAction: (state, action: PayloadAction<Product>) => {
      productsAdapter.addOne(state, action.payload);
    },
    deleteProductAction: (state, action: PayloadAction<number>) => {
      productsAdapter.removeOne(state, action.payload);
    },
    setSelectedProduct: (state, action: PayloadAction<ChangesPayload>) => {
      productsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          isSelected: action.payload.changes,
        },
      });
    },
  },
});

export const { addProductAction, deleteProductAction, setSelectedProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
