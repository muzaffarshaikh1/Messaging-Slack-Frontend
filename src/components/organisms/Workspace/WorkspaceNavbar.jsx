import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/apis/auth/context/useAuth';
import { useCurrentWorkspace } from '@/hooks/apis/workspace/context/useCurrentWorkspace';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import { InfoIcon, LucideLoader2, SearchIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router'

const WorkspaceNavbar = () => {

    const {workspaceId} = useParams();

    const {setCurrentWorkspace} = useCurrentWorkspace();
    const navigate = useNavigate();
    const {logout} = useAuth();
    const {isFetching, workspace, error, isSuccess} = useGetWorkspaceById(workspaceId);

    useEffect(() => {
        
        if(!isFetching && !isSuccess && error){
            console.log("Error Fetching workspace",error);
            console.log(error?.status == 403)
            console.log(error)
            if(error.status == 403){
                logout();
                navigate('/auth/signin');
            }
        }

        if(workspace){
            setCurrentWorkspace(workspace);
        }
    }, [workspace,setCurrentWorkspace,error,isSuccess, isFetching])
  

    if(isFetching){
        return <LucideLoader2 className='size-5 animate-spin' />
    }

    return (
        <nav className='flex items-center justify-center h-10 p-1.5 bg-slack-dark'>
            <div className="flex-1"/>
            <div className="">
                <Button 
                    size='sm'
                    className='bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2'
                >
                    <SearchIcon className='size-5 text-white mr-2'/>
                    <span className='text-white text-xs'>
                        Search {workspace?.name || 'Workspace'}
                    </span>
                </Button>
            </div>
            <div className="ml-auto flex-1 flex items-center justify-end">
                <Button
                    variant='transparent'
                    size='iconSm'
                >
                    <InfoIcon className='size-5  text-white'/>
                </Button>
            </div>
        </nav>
    )
}

export default WorkspaceNavbar