import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useWorkspacePreferencesModal } from "@/hooks/apis/workspace/context/useWorkspacePreferencesModal"
import { useDeleteWorkspace } from "@/hooks/apis/workspace/useDeleteWorkspace";
import { useUpdateWorkpace } from "@/hooks/apis/workspace/useUpdateWorkpace";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const WorkspacePreferencesModal = () => {
    const { initialValue, openPreferences, setOpenPreferences, workspace } = useWorkspacePreferencesModal();

    const queryClient = useQueryClient();

    const [workspaceId, setWorkspaceId] = useState();
    const [editOpen, setEditOpen] = useState(false);
    const [renameValue, setRenameValue] = useState(workspace?.name);
    const navigate = useNavigate();

    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspace?._id);

    const { isPending, updateWorkspaceMutation } = useUpdateWorkpace(workspace?._id);

    const handleClose = () => {
        setOpenPreferences(false)
    }
    const handleDelete = async () => {
        try {
            await deleteWorkspaceMutation();
            navigate('/home');
            queryClient.invalidateQueries('fetchWorkspaces');
            setOpenPreferences(false);
            toast.success('workspace deleted successfully!');
        } catch (error) {
            console.log("error in handleDelete: ", error);
            toast.warning('error in deleting workspace!');
        }
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            await updateWorkspaceMutation(renameValue);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
            setOpenPreferences(false);
            toast.success('workspace updated successfully!');
        } catch (error) {
            console.log("error in handleFormSubmit: ", error);
            toast.warning('error in updating workspace!');
        }
    }

    useEffect(() => {
        setWorkspaceId(workspace?._id)
        setRenameValue(workspace?.name)
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
                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger>
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
                        </DialogTrigger>
                        <DialogContent>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Rename workspace</DialogTitle>
                                </DialogHeader>
                                <form className="space-y-4" onSubmit={handleFormSubmit} >
                                    <Input value={renameValue}
                                        onChange={(e) => setRenameValue(e.target.value)}
                                        required
                                        autoFocus
                                        minLength={3}
                                        maxLength={50}
                                        disabled={isPending}
                                        placeholder="Workspace Name e.g. Design Team"
                                    />
                                    <DialogFooter>
                                        <DialogClose>
                                            <Button
                                                variant="outline"
                                                disabled={isPending}
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                type="submit"
                                                disabled={isPending}
                                            >
                                                Save
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </DialogContent>

                    </Dialog>

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