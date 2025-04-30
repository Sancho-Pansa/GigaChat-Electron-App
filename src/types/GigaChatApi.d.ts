export {};

declare global {
    interface Window {
        gigaChatApi: {
            sendQuestion: (message: string) => Promise<any>;
        }
    }
}