import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { LucideLoader2, TriangleAlert } from 'lucide-react';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const SigninCard = ({
    signinForm,
    setSigninForm,
    onSigninFormSubmit,
    validationError,
    isPending,
    isSuccess,
    error,
}) => {

    const navigate = useNavigate();

    return (
        <div>
            <Card className="h-full w-full">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Sign up to access your account</CardDescription>

                    {validationError.message && (
                        <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm  text-destructive mb-3'>
                            <TriangleAlert className='size-5' />
                            <p>{validationError.message}</p>
                        </div>
                    )}

                    {error && (
                        <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm  text-destructive mb-3'>
                            <TriangleAlert className='size-5' />
                            <p>{error.message}</p>
                        </div>
                    )}

                    {isSuccess && (
                        <div className="bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-3">
                            <FaCheck className='size-5' />
                            <p >Successfully signed up. you will br redirected to Home page shortly...
                                <LucideLoader2 className='animate-spin ml-2' />
                            </p>
                        </div>
                    )}

                </CardHeader>
                <CardContent>
                    <form className='space-y-3' onSubmit={onSigninFormSubmit}>
                        <Input
                            placeholder="Email"
                            required
                            onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                            value={signinForm.email}
                            type='email'
                            disabled={isPending}
                        />
                        <Input
                            placeholder="Password"
                            required
                            onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
                            value={signinForm.password}
                            type='password'
                            disabled={isPending}
                        />
                        <Button
                            disabled={isPending}
                            size='lg'
                            type='submit'
                            className='w-full'
                        >
                            Continue
                        </Button>
                    </form>
                    <Separator className='my-5' />

                    <p className='text-sm text-muted-foreground mt-4' >Don't have an account? {' '}
                        <span className='text-sky-600 hover:underline cursor-pointer' onClick={() => navigate('/auth/signup')}>Sign Up</span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default SigninCard