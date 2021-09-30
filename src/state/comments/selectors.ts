import { createSelector } from "reselect";
import { commentsAdapter } from "./slice";
import type { RootState } from "../store";

const commentsSelectors = commentsAdapter.getSelectors(
  (state: RootState) => state.comments,
);

export const allCommentsSelector = createSelector(
  [commentsSelectors.selectAll],
  (comments) => comments,
);
