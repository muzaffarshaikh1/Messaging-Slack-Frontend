import { createWorkspaceRequest } from "@/apis/workspace";
import { useMutation } from "@tanstack/react-query"
import { useAuth } from "../auth/context/useAuth";
import { toast } from "sonner";

export const useCreateWorkspace = () => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } = useMutation({
        mutationFn: (data) => createWorkspaceRequest({ ...data, token: auth?.token }),
        onSuccess: (response) => {
            console.log("workspace created successfully",response);
            toast.success('workspace create successfully');
        },
        onError: (response) => {
            console.log("error while creating workspace!",response);
            toast.warning('error while creating workspace!');
        }
    });
    return{
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    }
}