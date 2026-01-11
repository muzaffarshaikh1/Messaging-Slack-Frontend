import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useCreateChannelModal } from '@/hooks/apis/workspace/context/useCreateChannelModal'
import { useCurrentWorkspace } from '@/hooks/apis/workspace/context/useCurrentWorkspace'
import { useAddChannelToWorkspace } from '@/hooks/apis/workspace/useAddChannelToWorkspace'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { toast } from 'sonner'

const CreateChannelModal = () => {
  
    const [channelName,setChannelName] = useState('');

    const queryClient = useQueryClient();

    const {openCreateChannelModal,setOpenCreateChannelModal} = useCreateChannelModal()

    const {currentWorkspace} = useCurrentWorkspace();

    const {addChannelToWorkspaceMutation} = useAddChannelToWorkspace();

    function handleClose(){
        setOpenCreateChannelModal(false)
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        await addChannelToWorkspaceMutation({
            workspaceId:currentWorkspace?._id,
            channelName:channelName
        });
        toast.success('User Logged out successfully!');
        queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`)
        handleClose();
    } 

    return (
    <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create a channel</DialogTitle>
            </DialogHeader>
        <form onSubmit={handleFormSubmit} >
            <Input
                value={channelName}
                onChange={(e)=>setChannelName(e.target.value)}
                minLength={3}
                placeholder="Channel name e.g. team-announcemets"
                required
            />
            <div className="flex justify-end mt-4">
                <Button>Create Channel</Button>
            </div>
        </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateChannelModal