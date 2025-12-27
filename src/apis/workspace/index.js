import axios from "axios"

export const createWorkspaceRequest = async ({ name, description, token }) => {
    try {
        const response = await axios.post('/workspaces', { name, description }, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data;
    } catch (error) {
        console.log("error in createWorkspaceRequest", error);
        throw error.response.data;
    }
}

export const fetchWorkspacesRequest = async ({ token }) => {
    try {
        const response = await axios.get('/workspaces',{
                headers: {
                    'x-access-token':token
                }
         });
        return response.data;
    } catch (error) {
        console.log("error in fetchWorkspaceRequest", error);
        throw error.response.data;
    }
}