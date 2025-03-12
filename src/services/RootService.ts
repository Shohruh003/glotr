import UserDataService from './UserService';
import ProductService from './ProductService';
import NotifyWsService from './NotifyWsService';
import PostService from './PostService';

class RootService {
    public userDataService: UserDataService;
    public productService: ProductService;
    public notifyWsService: NotifyWsService;
    public postService: PostService;


    private static instance: RootService;

    private constructor() {
        this.userDataService = UserDataService.getInstance();
        this.productService = ProductService.getInstance();
        this.notifyWsService = NotifyWsService.getInstance();
        this.postService = PostService.getInstance();
    }

    public static getInstance(): RootService {
        if (!RootService.instance) {
            RootService.instance = new RootService();
        }

        return RootService.instance;
    }
}

const rootService = RootService.getInstance();
export default rootService;