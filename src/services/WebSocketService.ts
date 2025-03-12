class WebSocketService {
    private static instance: WebSocketService;
    private socket: WebSocket;

    private constructor() {
        const wsUrl = import.meta.env.VITE_WS_URL;
        this.socket = new WebSocket(wsUrl);

        this.socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.handleMessage(message);
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    public static getInstance(): WebSocketService {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }

        return WebSocketService.instance;
    }

    private handleMessage(message: { command: string; data: any }) {
        switch (message.command) {
            case 'exampleCommand':
                this.handleExampleCommand(message.data);
                break;
            // Добавляем больше вариантов для разных команд
            default:
                console.warn('Unknown command:', message.command);
        }
    }

    private handleExampleCommand(data: any) {
        console.log('Handling example command with data:', data);
       // Здесь реализуем логику обработки команд
    }

    public sendMessage(command: string, data: any) {
        const message = JSON.stringify({ command, data });
        this.socket.send(message);
    }
}

export default WebSocketService