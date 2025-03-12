interface IPost {
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

const posts: IPost[] = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Body of post 1',
        userId: 1,
        tags: ['tag1', 'tag2'],
        reactions: 10,
        comments: [],
        views: 100,
        likes: 50,
        dislikes: 5,
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
        publishedAt: '2021-01-01T00:00:00Z',
        image: 'post1.jpg',
        markdown: '# Post 1\nBody of post 1',
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'Body of post 2',
        userId: 2,
        tags: ['tag2', 'tag3'],
        reactions: 20,
        comments: [],
        views: 200,
        likes: 100,
        dislikes: 10,
        createdAt: '2021-01-02T00:00:00Z',
        updatedAt: '2021-01-02T00:00:00Z',
        publishedAt: '2021-01-02T00:00:00Z',
        image: 'post2.jpg',
        markdown: '# Post 2\nBody of post 2',
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'Body of post 3',
        userId: 3,
        tags: ['tag3', 'tag4'],
        reactions: 30,
        comments: [],
        views: 300,
        likes: 150,
        dislikes: 15,
        createdAt: '2021-01-03T00:00:00Z',
        updatedAt: '2021-01-03T00:00:00Z',
        publishedAt: '2021-01-03T00:00:00Z',
        image: 'post3.jpg',
        markdown: '# Post 3\nBody of post 3',
    },
]

export default posts;
