import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../auth/context/useAuth";
import { addChannelToWorkspaceRequest } from "@/apis/workspace";
import { toast } from "sonner";

export const useAddChannelToWorkspace = () => {
    const { auth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: addChannelToWorkspaceMutation } = useMutation({
        mutationFn: ({workspaceId,channelName}) => addChannelToWorkspaceRequest({ workspaceId,channelName, token: auth.token }),
        onSuccess: (response) => {
            console.log("Channel added to workspace successfully", response);
            toast.success('Channel added to workspace successfully');
        },
        onError: (response) => {
            console.log("error while adding channel workspace!", response);
            toast.warning('error while adding channel workspace!');
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        addChannelToWorkspaceMutation
    }
}