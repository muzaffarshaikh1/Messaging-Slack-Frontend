import {deleteWorkspaceRequest } from "@/apis/workspace";
import { useAuth } from "../auth/context/useAuth";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export const useDeleteWorkspace = (workspaceId) => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: deleteWorkspaceMutation } = useMutation({
        mutationFn: () => deleteWorkspaceRequest({ workspaceId ,token: auth?.token }),
        onSuccess: (response) => {
            console.log("workspace deleted successfully",response);
            toast.success('workspace deleted successfully');
        },
        onError: (response) => {
            console.log("error while deleting workspace!",response);
            toast.warning('error while deleting workspace!');
        }
    });
    return{
        isPending,
        isSuccess,
        error,
        deleteWorkspaceMutation
    }
}