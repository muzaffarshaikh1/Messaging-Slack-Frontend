import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspaceModal } from '@/hooks/apis/workspace/context/useCreateWorkspaceModal'
import { useCreateWorkspace } from '@/hooks/apis/workspace/useCreateWorkspace';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const CreateWorkspaceModal = () => {
    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
    const [workspaceName, setWorkspaceName] = useState('');
    const queryClient = useQueryClient(); 
    const {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    } = useCreateWorkspace();
    const navigate = useNavigate()
    const handleClose = () => {
        setOpenCreateWorkspaceModal(false);
    }

    async function handleCreateWorkspaceFormSubmit(e){
        e.preventDefault()

        if(!workspaceName){
            console.log("Workspace name is required!")
            return;
        }

        try {
            const data = await createWorkspaceMutation({name:workspaceName});
            console.log("created workspace",data);
            navigate(`/workspaces/${data._id}`);
            queryClient.invalidateQueries('fetchWorkspaces');
        } catch (error) {
            console.log("error in handleCreateWorkspaceFormSubmit:",error)   
        }finally{
            setWorkspaceName('');
            setOpenCreateWorkspaceModal(false)
        }
    }
    return (
        <>
            <Dialog
                open={openCreateWorkspaceModal}
                onOpenChange={handleClose} >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create a new workspace</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleCreateWorkspaceFormSubmit}>
                        <Input
                            required
                            minLength={3}
                            disabled={isPending}
                            placeholder="Put the workspace name e.g MyWorkspace, Dev Workspace..."
                            value={workspaceName}
                            onChange={(e) => setWorkspaceName(e.target.value)}
                        />
                        <div className="flex justify-end mt-5">
                            <Button disabled={isPending} >Create workspace</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateWorkspaceModal