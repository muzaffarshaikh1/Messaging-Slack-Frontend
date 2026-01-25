import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesContexProvider } from "./WorkspacePreferencesModalContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { WorkspaceContextProvider } from "./WorkspaceContext";
import { SocketContextProvider } from "./SocketContext";

export const AppContextProvider = CombineContext(
    SocketContextProvider,
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    CreateChannelContextProvider,
    WorkspacePreferencesContexProvider,
    WorkspaceContextProvider
);