import { fetchWorkspacesRequest } from "@/apis/workspace";
import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../auth/context/useAuth";
import { toast } from "sonner";

export const useFetchWorkspace = () => {
    const { auth } = useAuth();
    const {isFetching, isSuccess, error,data} = useQuery({
        queryFn:() => fetchWorkspacesRequest({token:auth?.token}),
        queryKey:['fetchWorkspaces'],
        staleTime:30000
    });

    return{
        isFetching,
        isSuccess,
        error,
        workspaces:data
    }
}