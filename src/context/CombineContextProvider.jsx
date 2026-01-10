import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesContexProvider } from "./WorkspacePreferencesModalContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    CreateChannelContextProvider,
    WorkspacePreferencesContexProvider
);