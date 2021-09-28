export interface Comment {
  id: number;
  productId: number;
  description: string;
  date: Date;
}

export interface CommentChanges {
  id: number;
  text: string;
}
