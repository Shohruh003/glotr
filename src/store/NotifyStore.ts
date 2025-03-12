import { makeAutoObservable } from 'mobx';
import rootService from '../services/RootService';

class NotifyStore {
    private _notifications: any[] = [];
    readonly notifyWsService: any;

    constructor() {
        makeAutoObservable(this);
        this.notifyWsService = rootService.notifyWsService;

        // this._notifyWsService.socket.onmessage = (event: any) => {
        //     const message = JSON.parse(event.data);
        //     this.handleMessage(message);
        // };
    }
    
    set notifications(notifications: any[]) {
        this._notifications = notifications;
    }

    get notifications() {
        return this._notifications;
    }

    // private handleMessage(message: { command: string; data: any }) {
    //     switch (message.command) {
    //         case 'newNotification':
    //             this.addNotification(message.data);
    //             break;
    //         // При необходимости добавьте больше вариантов для разных команд
    //         default:
    //             console.warn('Unknown command:', message.command);
    //     }
    // }

    public addNotification(notification: any) {
        this.notifications.push(notification);
    }

    public removeNotification(index: number) {
        this.notifications.splice(index, 1);
    }

    public sendMessage(command: string, data: any) {
        this.notifyWsService.sendMessage(command, data);
    }
}

const notifyStore = new NotifyStore();
export default notifyStore;