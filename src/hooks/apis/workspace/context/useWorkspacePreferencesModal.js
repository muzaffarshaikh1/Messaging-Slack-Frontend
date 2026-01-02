import WorkspacePreferencesContex from "@/context/WorkspacePreferencesModalContext"
import { useContext } from "react"

export const useWorkspacePreferencesModal = () => {
  return useContext(WorkspacePreferencesContex)
}
