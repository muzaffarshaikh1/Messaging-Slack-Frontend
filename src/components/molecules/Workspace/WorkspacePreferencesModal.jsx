import { Dialog, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useWorkspacePreferencesModal } from "@/hooks/apis/workspace/context/useWorkspacePreferencesModal"
import { useDeleteWorkspace } from "@/hooks/apis/workspace/useDeleteWorkspace";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const WorkspacePreferencesModal = () => {
    const { initialValue, openPreferences, setOpenPreferences,workspace } = useWorkspacePreferencesModal();
    
    const queryClient = useQueryClient();

    const [workspaceId, setWorkspaceId] = useState();

    const navigate = useNavigate();

    const {deleteWorkspaceMutation} = useDeleteWorkspace(workspaceId);

    const handleClose = () => {
        setOpenPreferences(false)   
    }
    const handleDelete = async () =>{
        try {
            await deleteWorkspaceMutation();
            navigate('/home');
            queryClient.invalidateQueries('fetchWorkspaces');
            setOpenPreferences(false);
            toast.success('workspace deleted successfully!');
        } catch (error) {
            console.log("error in handleDelete: ",error)
        }
    }

    useEffect(() => {
        setWorkspaceId(workspace?._id)
    }, [workspace])
    
    return (
        <Dialog open={openPreferences} onOpenChange={handleClose}>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden" >
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm">
                                Workspace Name
                            </p>
                            <p className="text-sm font-semibold hover:underline">
                                Edit
                            </p>
                        </div>
                        <p className="text-sm">{initialValue}</p>
                    </div>

                    <button onClick={handleDelete} className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <TrashIcon className="size-5" />
                        <p className="text-sm font-semibold" >Delete Workspace</p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default WorkspacePreferencesModal