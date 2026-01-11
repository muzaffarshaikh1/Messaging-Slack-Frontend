import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../auth/context/useAuth"
import { resetJoinCodeRequest } from "@/apis/workspace";
import { toast } from "sonner";

export const useResetJoincode = (workspaceId) =>{
    const {auth} = useAuth();
    const queryClient = useQueryClient();
    const {isPending,isSuccess,error,mutateAsync:resetJoinCodeMutation} = useMutation({
        mutationFn:() => resetJoinCodeRequest({workspaceId,token:auth?.token}),
        onSuccess: (response) => {
            console.log("Joincode reset successfully",response);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`)
            toast.success('Joincode reset successfully');
        },
        onError: (response) => {
            console.log("error while reset joincode!",response);
            toast.warning('error while reset joincode!');
        }
    });
    return{
        isPending,
        isSuccess,
        error,
        resetJoinCodeMutation
    }
}