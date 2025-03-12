import ApiService from './ApiService';
import posts from './mock/Posts';

class PostService extends ApiService {
    private static instance: PostService;

    private constructor() {
        super();
    }

    public static getInstance(): PostService {
        if (!PostService.instance) {
            PostService.instance = new PostService();
        }

        return PostService.instance;
    }

    public async getPosts(): Promise<any> {
        // const response = await this.axiosInstance.get('/posts');
        // return Promise.resolve(response.data);
        return Promise.resolve(posts);
    }

    public async getPostById(id: string): Promise<any> {
        const response = await this.axiosInstance.get(`/posts/${id}`);
        return Promise.resolve(response.data);
    }

    public async createPost(post: any): Promise<any> {
        const response = await this.axiosInstance.post('/posts', post);
        return Promise.resolve(response.data);
    }

    public async updatePost(id: number, post: any): Promise<any> {
        const response = await this.axiosInstance.put(`/posts/${id}`, post);
        return Promise.resolve(response.data);
    }

    public async deletePost(id: number): Promise<void> {
        await this.axiosInstance.delete(`/posts/${id}`);
    }
}

export default PostService