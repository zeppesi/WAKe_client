export interface Record {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  content: Content;
}

export interface Content {
  id: number;
  text: string;
}
