import {  makeAutoObservable } from 'mobx';
import rootService from '../services/RootService';

class PostStore {
    private _posts: any = [];
    private _loading = false;

    readonly postService = rootService.postService;


    constructor() {
        makeAutoObservable(this);
    }

    set posts(posts: any) {
        this._posts = posts;
    }

    set loading(loading: boolean) {
        this._loading = loading;
    }

    get posts() {
        return this._posts;
    }

    get loading() {
        return this._loading;
    }

    async fetchPosts() {
        this.loading = true;
        
        return this.postService.getPosts()
        .then((data: any) => {
            this.posts = data;
        })
        .catch((error: any) => {
            console.error('Error fetching posts:', error);
        })
        .finally(() => {
            this.loading = false;
        });
    }

    async fetchPostById(id: string) {
        this.loading = true;
        
        return this.postService.getPostById(id)
        .then((data: any) => {
            const index = this.posts.findIndex((post: any) => post.id === id);
            if (index !== -1) {
                this.posts[index] = data;
            } else {
                this.posts.push(data);
            }
        })
        .catch((error: any) => {
            console.error('Error fetching post:', error);
        })
        .finally(() => {
            this.loading = false;
        });
    }

    async createPost(post: any) {
        this.loading = true;
        
        return this.postService.createPost(post)
        .then((data: any) => {
            this.posts.push(data);
        })
        .catch((error: any) => {
            console.error('Error creating post:', error);
        })
        .finally(() => {
            this.loading = false;
        });
    }

    async updatePost(id: number, post: any) {
        this.loading = true;
        
        return this.postService.updatePost(id, post)
        .then((data: any) => {
            const index = this.posts.findIndex((post: any) => post.id === id);
            if (index !== -1) {
                this.posts[index] = data;
            }
        })
        .catch((error: any) => {
            console.error('Error updating post:', error);
        })
        .finally(() => {
            this.loading = false;
        });
    }

    async deletePost(id: number) {
        this.posts = true;
        
        return this.postService.deletePost(id)
        .then(() => {
            this.posts = this.posts.filter((post: any) => post.id !== id);
        })
        .catch((error: any) => {
            console.error('Error deleting post:', error);
        })
        .finally(() => {
            this.loading = false;
        });
    }
}

export default new PostStore();