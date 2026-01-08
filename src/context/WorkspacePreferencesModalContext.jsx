import { createContext, useState } from "react";

const WorkspacePreferencesContex = createContext();

export const WorkspacePreferencesContexProvider = ({children})=> {

    const [openPreferences,setOpenPreferences] = useState(false);

    const [workspace,setWorkspace] = useState(null);

    const [initialValue,setInitialValue] = useState('Edit Workspace');

    return(
        <WorkspacePreferencesContex.Provider value={{openPreferences, setOpenPreferences,initialValue,setInitialValue,workspace,setWorkspace}} >
            {children}
        </WorkspacePreferencesContex.Provider>
    )
}

export default WorkspacePreferencesContex;
