import React, {useEffect, useState } from 'react'
import SigninCard from './SigninCard';
import { useSignin } from '@/hooks/apis/auth/useSignin';
import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/apis/auth/context/useAuth';

const SigninContainer = () => {
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: '',
    });
    const userData = useAuth();

    useEffect(() => {
        console.log("userData:",userData);
    }, [userData])
    

    const navigate = useNavigate()

    const [validationError, setValidationError] = useState({ message: '' });

    const {
        isPending,
        isSuccess,
        error,
        signinMutation
    } = useSignin();

    async function onSigninFormSubmit(e) {
        e.preventDefault();

        if (!signinForm.email || !signinForm.password) {
            console.log("All fields are required!");
            setValidationError({ message: "All fields are required!" });
            return
        }

        setValidationError({ message: "" });

        console.log("Form submitted successfuly!", signinForm);

        await signinMutation({
            email:signinForm.email,
            password:signinForm.password
        });

    }

    useEffect(()=>{
        if(isSuccess){
            setInterval(() => {
                navigate('/home')
            }, 3000);
        }
    },[isSuccess,navigate])

    return (
        <SigninCard
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
            validationError={validationError}
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            onSigninFormSubmit={onSigninFormSubmit}
        />
    );
}

export default SigninContainer;