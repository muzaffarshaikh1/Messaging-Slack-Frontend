import { fetchWorkspaceDetails } from '@/apis/workspace'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../auth/context/useAuth'

export const useGetWorkspaceById = (id) => {
    const {auth} = useAuth();
    const {isFetching,isSuccess,error,data:workspace} = useQuery({
        queryFn:()=>fetchWorkspaceDetails({workspaceId:id,token:auth?.token}),
        queryKey:[`fetchWorkspaceById-${id}`],
        staleTime:10000
    })

    return {
        isFetching,
        isSuccess,
        error,
        workspace
    }
}
