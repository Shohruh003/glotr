export interface IMainAppOptions {
  language: string;
  locale: Record<string, unknown>;
  config: Record<string, unknown>;
  isMobile?: boolean;
}

export interface IProduct {
  id: number;
  description: string;
  price: number;
  name: string;
  image?: string;
  stock: string;
  store: string;
  location: string;
  code: number;
  characteristics: { label: string; value: string }[];
}
export interface IUser {
  id: number;
  name: string;
  email: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  comments: IComment[];
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: string;
  markdown: string;
}

interface IComment {
  id: number;
  postId: number;
  userId: number;
  body: string;
  reactions: number;
  createdAt: string;
  updatedAt: string;
}
