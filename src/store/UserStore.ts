import { makeAutoObservable } from 'mobx';
import rootService from '../services/RootService';

class UserStore {
  private _user = { name: '', age: 0 };
  private _loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  set user(user: any) {
    this._user = user;
  }

  set loading(loading: boolean) {
    this._loading = loading;
  }

  get user() {
    return this._user;
  }

  get loading() {
    return this._loading;
  }

  // Запрос для получения данных пользователя
  async fetchUserData() {
    this.loading = true;
    try {
      const data = await rootService.userDataService.getUserData();
      this.user = data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      this.loading = false;
    }
  }
}

export default new UserStore();