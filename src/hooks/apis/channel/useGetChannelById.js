import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../auth/context/useAuth"
import { getChannelById } from "@/apis/channel";

export const useGetChannelById = (channelId) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: channelDetails } = useQuery({
        queryFn: () => getChannelById({ channelId, token: auth?.token }),
        queryKey: [`get-channel-${channelId}`],
        staleTime: 10000
    });
    return {
        isFetching,
        isSuccess,
        error,
        channelDetails
    }
}