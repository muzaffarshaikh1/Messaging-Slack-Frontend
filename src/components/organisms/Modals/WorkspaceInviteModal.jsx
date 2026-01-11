import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useResetJoincode } from '@/hooks/apis/workspace/useResetJoinCode'
import { CopyIcon, RefreshCcwIcon } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

export const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, workspaceId, joinCode }) => {

    const { resetJoinCodeMutation } = useResetJoincode(workspaceId)

    async function handleCopy() {
        const inviteLink = `${joinCode}`;
        await navigator.clipboard.writeText(inviteLink);
        toast.success('Link copied to clipboard');
    }

    function handleClose() {
        setOpenInviteModal(false)
    }

    async function handleResetCode() {
        try {
            await resetJoinCodeMutation();
            // handleClose();
        } catch (error) {
            console.log("error while reset the joincode:", error)
        }
    }

    return (
        <Dialog open={openInviteModal} onOpenChange={handleClose} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Invite People to {workspaceName}</DialogTitle>
                    <DialogDescription>
                        Use the code shown below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center items-center py-10 gap-y-4">
                    <p className='font-bold text-4xl uppercase'>{joinCode}</p>
                    <Button size='sm' variant='ghost' onClick={handleCopy}>
                        Copy Link
                        <CopyIcon className='size-4 ml-2' />
                    </Button>
                    <a
                        href={`/workspaces/join/${workspaceId}`}
                        target='_blank'
                        rel='noreferer'
                        className='text-blue-500'
                    >
                        Redirect to join page
                    </a>
                </div>
                <div className="flex justify-center items-center w-full">
                    <Button variant='outline' onClick={handleResetCode}>
                        Reset Join Code
                        <RefreshCcwIcon className='size-4 ml-2' />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
