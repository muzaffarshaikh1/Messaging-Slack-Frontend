import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
    try {
        const response = await axios.post('/workspaces', { name, description }, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log("error in createWorkspaceRequest", error);
        throw error.response.data;
    }
}

export const fetchWorkspacesRequest = async ({ token }) => {
    try {
        const response = await axios.get('/workspaces', {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log("error in fetchWorkspaceRequest", error);
        throw error.response.data;
    }
}

export const fetchWorkspaceDetails = async ({ workspaceId, token }) => {
    try {
        const response = await axios.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log("error in fetchWorkspaceDetals", error);
        throw error.response.data;
    }
}

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.delete(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log("error in deleteWorkspace", error);
        throw error.response.data;
    }
}

export const updateWorkspaceRequest = async ({ workspaceId,name, token}) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}`, {name}, {
            headers: {
                'x-access-token': token
            }
        }
        );
        return response?.data?.data;
    } catch (error) {
        console.log("error in updateWorkspaceRequest", error);
        throw error.response.data;
    }
}

export const addChannelToWorkspaceRequest = async({workspaceId, channelName, token}) =>{
    try {
        const response = await axios.post(`/workspaces/${workspaceId}/channels`, {channelName}, {
            headers: {
                'x-access-token': token
            }
        })
        return response?.data?.data;
    } catch (error) {
        console.log("error in addChannelToWorkspaceRequest", error);
        throw error.response.data;
    }
}

export const resetJoinCodeRequest = async({workspaceId, token}) =>{
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/joinCode/reset`,{},{
            headers: {
                'x-access-token': token
            }
        })
        return response?.data?.data;
    } catch (error) {
        console.log("error in resetJoinCodeRequest", error);
        throw error.response.data;
    }
}