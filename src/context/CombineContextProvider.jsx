import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesContexProvider } from "./WorkspacePreferencesModalContext";

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferencesContexProvider
);