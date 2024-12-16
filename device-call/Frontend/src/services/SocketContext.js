import React, { createContext, useContext, useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';


const SocketContext = createContext();

const SOCKET_SERVER_URL = 'https://192.168.1.8:4000';  // Change this to your actual server URL

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish the socket connection
    const sckt = socketIOClient(SOCKET_SERVER_URL, { secure: true });
    setSocket(sckt);

    // Cleanup when the component unmounts
    return () => {
      sckt.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
