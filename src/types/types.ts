export interface IMainAppOptions {
    language: string;
    locale: Record<string, any>;
    config: Record<string, any>;
    isMobile?: boolean;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
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
