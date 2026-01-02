import WorkspacePanelHeader from '@/components/molecules/Workspace/WorkspacePanelHeader';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import { AlertTriangleIcon, Loader } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router'

const WorkspacePanel = () => {
    const { workspaceId } = useParams();

    const {isFetching, workspace, isSuccess} = useGetWorkspaceById(workspaceId);

    if(isFetching){
        return(
            <div>
                <Loader className='size-6 animate-spin text-white'/>
            </div>
        )
    }

    if(!isSuccess){
        return(
            <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
                <AlertTriangleIcon className='size-5 text-white'/>
                Something went wrong!
            </div>
        )
    }



    return (
        <div className='flex flex-col h-full bg-slack-medium'>
            <WorkspacePanelHeader workspace={workspace}/>
        </div>
    )
}

export default WorkspacePanel