import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/apis/auth";
import { toast } from "sonner";

export const useSignup = () =>{
    const {isPending, isSuccess,error, mutateAsync:signupMutation} = useMutation({
        mutationFn:signUpRequest,
        onSuccess:(data) =>{
            console.log("successfully signed up",data);
            toast.success('Successfully signed up');
        },
        onError:(error)=>{
            console.error("Failed to sign up", error);
            toast.warning('Failed to sign up!')
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}