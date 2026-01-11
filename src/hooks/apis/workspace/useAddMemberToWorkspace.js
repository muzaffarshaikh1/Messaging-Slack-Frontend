import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../auth/context/useAuth"
import { addMemberToWorkspaceRequest } from "@/apis/workspace";
import { toast } from "sonner";

export const useAddMemberToWorkspace = (workspaceId)=>{
    const {auth} = useAuth();

    const {mutateAsync:addMemberToWorkspaceMutation,isPending, isSuccess, error} = useMutation({
        mutationFn:()=>addMemberToWorkspaceRequest({workspaceId,token:auth?.token}),
        onSuccess:()=>{
            console.log('Member added to workspace successfully')
            toast.success('Member added to workspace successfully');
        },
        onError: (response) => {
            console.log("error while adding member workspace!",response);
            toast.warning('error while adding member workspace!');
        }
    })

    return{
        addMemberToWorkspaceMutation,
        isPending,
        isSuccess,
        error
    }
}