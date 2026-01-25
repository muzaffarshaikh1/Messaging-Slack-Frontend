import { createContext, useState } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {

    const [currentChannel, setCurrentChannel] = useState(null);

    const socket = io('http://localhost:3000');

    async function joinChannel(channelId){
        socket.emit('JoinChannel',{channelId},(data)=>{
            console.log("Successfully joined the channel",data);
            setCurrentChannel(data?.data)
        });
    }

    return(
        <SocketContext.Provider value={{socket,joinChannel,currentChannel}} >
            {children}
        </SocketContext.Provider>
    )
}
export default SocketContext;
