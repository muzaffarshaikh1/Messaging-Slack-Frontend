import React, { useEffect, useState } from 'react'
import SignupCard from './SignupCard'
import { useSignup } from '@/hooks/apis/auth/useSignup';
import { useNavigate } from 'react-router';

const SignupContainer = () => {

    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const navigate = useNavigate();

    const [validationError, setValidationError] = useState({ message: '' });

    const {
        isPending,
        isSuccess,
        error,
        signupMutation
    } = useSignup();

    async function onSignupFormSubmit(e) {
        e.preventDefault();

        if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
            setValidationError({ message: "All Fields are required!" })
            return;
        }

        if (signupForm.password != signupForm.confirmPassword) {
            setValidationError({ message: "Passowrd is not matched" });
            return
        }

        setValidationError({ message: '' });

        await signupMutation({
            email:signupForm.email,
            password:signupForm.password,
            username:signupForm.username,
        })

        console.log("Form submitted successfully!", signupForm);
    }

    useEffect(() => {
      if(isSuccess){
        setTimeout(() => {
            navigate('/auth/signin');
        }, 3000);
      }
    }, [isSuccess,navigate])
    

    return (
        <SignupCard
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
            signupForm={signupForm}
            setSignupForm={setSignupForm}
            onSignupFormSubmit={onSignupFormSubmit}
            validationError={validationError}
        />
    )
}

export default SignupContainer