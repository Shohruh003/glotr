import ApiService from "./ApiService";
import users from "./mock/User";

class UserDataService extends ApiService {
    private static instance: UserDataService;

    private constructor() {
        super();
    }

    public static getInstance(): UserDataService {
        if (!UserDataService.instance) {
            UserDataService.instance = new UserDataService();
        }

        return UserDataService.instance;
    }

    public async getUserData(): Promise<any> {
        // const response = await this.axiosInstance.get('/users');
        // return Promise.resolve(response.data);
        return Promise.resolve(users[0])
    }
}

export default UserDataService