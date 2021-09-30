import type { CommentType } from "../comments/types";

export interface ChangeStatusPayload {
  id: number;
  changes?: boolean;
}

export interface Product {
  id: number;
  isSelected: boolean;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments?: CommentType[];
}

export interface ChangeProductPayload {
  id: number;
  count: string;
  width: string;
  height: string;
  weight: string;
}
