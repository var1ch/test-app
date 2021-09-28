import { createSelector } from "reselect";
import { commentsAdapter } from "./slice";
import type { RootState } from "../store";

const commentsSelectors = commentsAdapter.getSelectors(
  (state: RootState) => state.comments,
);

export const commentByIdSelector = commentsSelectors.selectById;

export const filteredCommentsSelector = createSelector(
  [commentsSelectors.selectAll],
  (products) => products,
);
