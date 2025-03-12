import WebSocketService from "./WebSocketService";

class NotifyWsService {
    private websocket: WebSocketService;
    private static instance: NotifyWsService;

    private constructor() {
        this.websocket = WebSocketService.getInstance();
    }

    public static getInstance(): NotifyWsService {
        if (!NotifyWsService.instance) {
            NotifyWsService.instance = new NotifyWsService();
        }

        return NotifyWsService.instance;
    }

    public sendMessage(command: string, data: any) {
        this.websocket.sendMessage(command, data);
    }
}

export default NotifyWsService