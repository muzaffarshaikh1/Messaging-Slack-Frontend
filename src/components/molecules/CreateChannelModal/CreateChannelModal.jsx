import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useCreateChannelModal } from '@/hooks/apis/workspace/context/useCreateChannelModal'
import { DialogTitle } from '@radix-ui/react-dialog'
import React, { useState } from 'react'

const CreateChannelModal = () => {
  
    const [channelName,setChannelName] = useState('');

    const {openCreateChannelModal,setOpenCreateChannelModal} = useCreateChannelModal()

    function handleClose(){
        setOpenCreateChannelModal(false)
    }

    async function handleFormSubmit(e){
        e.preventDefault();
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