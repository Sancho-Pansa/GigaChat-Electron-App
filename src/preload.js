// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("gigaChatApi", {
  sendQuestion: (message) => ipcRenderer.invoke("sendQuestion", message),
  getBalance: () => ipcRenderer.invoke("getTokenBalance")
});