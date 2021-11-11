import { createContext, FC } from 'react';
import { io } from 'socket.io-client';
// import { appLogger } from '../helpers/logger';

export const websocketContext = createContext(null);

export const WebsocketProvider: FC = ({ children }) => {
  let socket: any;
  // let ws;
  // useEffect(() => {
  //   const socketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? '';
  //   appLogger.info({ socketUrl });
  //   const socket = io(socketUrl);

  //   socket.on('connection', (...args) => {
  //     // socket.emit('AImessage', 'hello!');
  //     // socket.on('respuesta', (data) =>
  //     //   console.log(`${data} respuesta web socket io`),
  //     // );
  //     console.log('conectado');
  //     appLogger.info({ args });
  //     // setFuntionWebSocketIO(socket);
  //   });
  // }, []);
  // const sendMessage = () => {
  //   socket.emit('AImessage', 'hello!');
  // };
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? '');

    socket.on('connection', () => {
      socket.on('disconnect', () => {});
    });
  }

  // const socket: Socket<DefaultEventsMap> = io(
  //   process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? '',
  // )

  // socket.on("respuesta", (msg: string) => {
  //    // const payload = JSON.parse(msg);
  //   //  dispatch(updateChatLog(payload));
  //   console.log(msg);
  // })

  return (
    <websocketContext.Provider value={socket}>
      {children}
    </websocketContext.Provider>
  );
};
