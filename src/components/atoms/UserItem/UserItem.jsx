import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useCurrentWorkspace } from '@/hooks/apis/workspace/context/useCurrentWorkspace'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'
import { Link } from 'react-router'

const userItemVarinats = cva(
    'flex items-center justify-start gap-1.5 font-normal h-7 px-4 text-sm',
    {
        variants: {
            variant:{
                default:'text-[#f9edffcc]',
                active:'text-[#481350] bg-white/90 hover:white/80',
            },
            defaultVariants:'default'
        }
    }
)

const UserItem = ({
    id,
    label,
    image,
    variant
}) => {
    const {workspace} = useCurrentWorkspace();
    return (
        <Button className={cn(userItemVarinats({variant}))}
            variant='transparent'
            size='sm'
            asChild
        >
            <Link to={`/workspace/${workspace?._id}/members/${id}`} >
                <Avatar>
                    <AvatarImage src={image} className='rounded-md' />
                    <AvatarFallback className="rounded-md bg-sky-500 text-white" >
                        {label.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span className="text-sm  truncate">
                        {label}
                    </span>
            </Link>
        </Button>
    )
}

export default UserItem