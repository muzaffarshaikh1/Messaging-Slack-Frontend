import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SigninCard = () => {

    const navigate = useNavigate();

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: '',
    });
    return (
        <div>
            <Card className="h-full w-full">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Sign up to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='space-y-3'>
                        <Input
                            placeholder="Email"
                            required
                            onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                            value={signinForm.email}
                            type='email'
                            disabled={false}
                        />
                        <Input
                            placeholder="Password"
                            required
                            onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
                            value={signinForm.password}
                            type='password'
                            disabled={false}
                        />
                        <Button
                            disabled={false}
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