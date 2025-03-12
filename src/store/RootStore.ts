import { makeAutoObservable } from 'mobx';
import UserStore from './UserStore';
import ProductStore from './ProductStore';
import NotifyStore from './NotifyStore';
import PostStore from './PostStore';

class RootStore {
  public userStore = UserStore;
  public productStore = ProductStore;
  public notifyStore = NotifyStore;
  public postStore = PostStore;


  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
