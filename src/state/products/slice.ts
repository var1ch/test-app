import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./types";

const productsAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

const ProductsSlice = createSlice({
  name: "counter",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    setProductsAction: (state, action: PayloadAction<Product[]>) => {
      productsAdapter.setAll(state, action.payload);
    },
  },
});

export default ProductsSlice.reducer;
