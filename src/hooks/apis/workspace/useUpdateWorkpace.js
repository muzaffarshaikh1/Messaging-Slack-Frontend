import {updateWorkspaceRequest } from "@/apis/workspace";
import { useAuth } from "../auth/context/useAuth";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkpace = (workspaceId) => {
    console.log("useUpdateWorkpace:",workspaceId)
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation } = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({ workspaceId,name, token: auth?.token }),
        onSuccess: (response) => {
            console.log("workspace updated successfully",response);
            toast.success('workspace updated successfully');
        },
        onError: (response) => {
            console.log("error while updating workspace!",response);
            toast.warning('error while updating workspace!');
        }
    });
    return{
        isPending,
        isSuccess,
        error,
        updateWorkspaceMutation
    }
}