import type { Comment } from "../comments/types";

export interface ChangesPayload {
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
  comments?: Comment[];
}
