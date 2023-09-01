import { io } from 'socket.io-client';
import { SOCKET_URL } from './config/constant';
console.log("🚀 ~ file: socket.tsx:3 ~ SOCKET_URL:", SOCKET_URL)

export const socket = io(SOCKET_URL);