import { useMutation } from "@tanstack/react-query"
import { signInRequest } from "@/apis/auth"
import { toast } from "sonner";

export const useSignin = () => {
        const { isPending, isSuccess, error, mutateAsync: signinMutation} = useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            console.log("user signed in successfully!", data);
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


