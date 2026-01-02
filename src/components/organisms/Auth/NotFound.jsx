import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useNavigate } from 'react-router'

export const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-grey-100">
            <Card className="text-center shadow-lg max-w-lg">
                <CardHeader>
                    <CardTitle>404 Not Found</CardTitle>
                    <p className='text-gray-600'>The page you are looking for does not exists</p>
                </CardHeader>
                <CardContent>
                    <img className='rounded-lg' src='https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg' />
                    <Button asChild
                        variant='outline'
                        className='mt-4'
                        onClick={()=>navigate(-1)}
                    >
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
