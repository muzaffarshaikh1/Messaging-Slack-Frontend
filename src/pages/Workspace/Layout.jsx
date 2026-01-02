import { useDefaultLayout } from "react-resizable-panels"
import WorkspaceNavbar from "@/components/organisms/Workspace/WorkspaceNavbar"
import WorkspaceSidebar from "@/components/organisms/Workspace/WorkspaceSidebar"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import WorkspacePanel from "@/components/organisms/Workspace/WorkspacePanel"

export const WorkspaceLayout = ({ children }) => {
  const { defaultLayout, onLayoutChange } = useDefaultLayout({
    id: "workspace-layout",
    storage: localStorage
  })

  // Set initial default layout if nothing is saved
  const initialLayout = defaultLayout || {
    "sidebar-panel": 20,
    "main-panel": 80
  }
  
  return (
    <div className="h-[100vh]">
      <WorkspaceNavbar />
      <div className="flex h-[calc(100vh-40px)]">
        <WorkspaceSidebar />
        <ResizablePanelGroup 
          direction="horizontal"
          defaultLayout={initialLayout}
          onLayoutChange={onLayoutChange}
        >
          <ResizablePanel
            id="sidebar-panel"
            defaultSize={20}
            minSize={11}
            className="bg-slack-medium"
          >
            <div className="">
              <WorkspacePanel/>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            id="main-panel"
            minSize={20}
          >
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}