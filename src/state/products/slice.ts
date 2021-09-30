import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  Product,
  ChangeStatusPayload,
  ChangeProductPayload,
} from "./types";

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
    setSelectedProductAction: (
      state,
      action: PayloadAction<ChangeStatusPayload>,
    ) => {
      productsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          isSelected: action.payload.changes,
        },
      });
    },
    changeProductAction: (
      state,
      action: PayloadAction<ChangeProductPayload>,
    ) => {
      productsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          count: +action.payload.count,
          size: {
            width: +action.payload.width,
            height: +action.payload.height,
          },
          weight: `${action.payload.weight}g`,
        },
      });
    },
  },
});

export const {
  addProductAction,
  deleteProductAction,
  setSelectedProductAction,
  changeProductAction,
} = productsSlice.actions;

export default productsSlice.reducer;
