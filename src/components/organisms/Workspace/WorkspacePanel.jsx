import SidebarItem from '@/components/atoms/SidebarItem/SidebarItem';
import WorkspacePanelHeader from '@/components/molecules/Workspace/WorkspacePanelHeader';
import WorkspacePanelSection from '@/components/molecules/Workspace/WorkspacePanelSection';
import { useCreateChannelModal } from '@/hooks/apis/workspace/context/useCreateChannelModal';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizontalIcon } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router'

const WorkspacePanel = () => {
    const { workspaceId } = useParams();

    const {setOpenCreateChannelModal} = useCreateChannelModal();

    const { isFetching, workspace, isSuccess } = useGetWorkspaceById(workspaceId);

    if (isFetching) {
        return (
            <div>
                <Loader className='size-6 animate-spin text-white' />
            </div>
        )
    }

    if (!isSuccess) {
        return (
            <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
                <AlertTriangleIcon className='size-5 text-white' />
                Something went wrong!
            </div>
        )
    }



    return (
        <div className='flex flex-col h-full bg-slack-medium'>
            <WorkspacePanelHeader workspace={workspace} />

            <div className="flex flex-col px-2 mt-3">
                <SidebarItem
                    label='Threads'
                    icon={MessageSquareTextIcon}
                    id="threads"
                    variant="active"
                />
                <SidebarItem
                    label='Drafts & Send'
                    icon={SendHorizontalIcon}
                    id="drafts"
                    variant="default"
                />
            </div>

            <WorkspacePanelSection
                label='Channels'
                onIconClick={()=>{setOpenCreateChannelModal(true)}}
            >
                {workspace?.channels?.map((channel) => {
                    return <SidebarItem
                        key={channel?._id}
                        icon={HashIcon}
                        label={channel?.name}
                        id={channel?._id}
                    />
                })}
            </WorkspacePanelSection>
        </div>
    )
}

export default WorkspacePanel