import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CommentType } from "./types";

export const commentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    addCommentAction: (state, action: PayloadAction<CommentType>) => {
      commentsAdapter.addOne(state, action.payload);
    },
    deleteCommentAction: (state, action: PayloadAction<number>) => {
      commentsAdapter.removeOne(state, action.payload);
    },
    // editCommentAction: (state, action: PayloadAction<CommentChanges>) => {
    //   commentsAdapter.updateOne(state, {
    //     id: action.payload.id,
    //     changes: {
    //       description: action.payload.text,
    //     },
    //   });
    // },
  },
});

export const { addCommentAction, deleteCommentAction } = commentsSlice.actions;

export default commentsSlice.reducer;
