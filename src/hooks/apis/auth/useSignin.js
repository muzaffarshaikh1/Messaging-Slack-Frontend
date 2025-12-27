import { useMutation } from "@tanstack/react-query"
import { signInRequest } from "@/apis/auth"
import { toast } from "sonner";

export const useSignin = () => {
        const { isPending, isSuccess, error, mutateAsync: signinMutation} = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log("user signed in successfully!", response);

            const userData = JSON.stringify(response.data);

            localStorage.setItem('user',userData);
            localStorage.setItem('token',response.data.token);

            toast.success("Successfully signed in");
        },
        onError: (error) => {
            console.error("Unable to signed in!",error);
            toast.warning("Unable to signed in!")
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    }
}


