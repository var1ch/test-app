import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentsReducer from "./comments/slice";
import productsReducer from "./products/slice";

const rootReducer = combineReducers({
  comments: commentsReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
