import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../auth/context/useAuth"
import { joinWorkspaceRequest } from "@/apis/workspace";

export const useJoinWorkspace = (workspaceId) =>{
    const {auth} = useAuth();
    const {mutateAsync:joinWorkspaceMutation, isPending, isSuccess,error} = useMutation({
        mutationFn:(joinCode)=>joinWorkspaceRequest({workspaceId,joinCode,token:auth?.token}),
        onSuccess:()=>{
            console.log("Workspace joined successfully");
        },
        onError:(error)=>{
            console.log("error while joinning workspace: ",error);
        }
    });
    return{
        joinWorkspaceMutation,
        isPending,
        isSuccess,
        error
    }
}