import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/apis/auth/context/useAuth'
import { useCreateWorkspaceModal } from '@/hooks/apis/workspace/context/useCreateWorkspaceModal';
import { LogOut, PencilIcon, Settings } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const UserButton = () => {
    const { auth, logout } = useAuth();
    const {openCreateWorkspaceModal,setOpenCreateWorkspaceModal} = useCreateWorkspaceModal();
    const navigate = useNavigate();

    async function logoutHandler() {
        await logout();
        toast.success('User Logged out successfully!');
        navigate('/auth/signin')
    }

    function openCreateWorkspaceModalHandler(){
        setOpenCreateWorkspaceModal(true)
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="outline-none relative">
                    <Avatar className="size-10 hover:opacity-65 transition">
                        <AvatarFallback>{auth.user.username[0].toUpperCase()}</AvatarFallback>
                        <AvatarImage src={auth.user.avatar} />
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={openCreateWorkspaceModalHandler} >
                        <PencilIcon />
                        Create new workspace
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler} >
                        <LogOut />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default UserButton