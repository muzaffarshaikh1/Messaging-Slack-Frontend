import axios from "@/config/axiosConfig";

export const signUpRequest = async ({username, email, password}) =>{
    try {
        const response = await axios.post('/users/signup',{username,email,password})
        return response.data;
    } catch (error) {
        console.error("error in signUpRequest:",error);
        throw error.response.data;
    }
}

export const signInRequest = async ({email, password}) =>{
    try {
        const response = await axios.post('/users/signin',{email,password})
        return response.data;
    } catch (error) {
        console.error("error in signInRequest:",error);
        throw error.response.data;
    }
}