import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useFetchWorkspaces } from "@/hooks/apis/workspace/useFetchWorkspaces";
import { useGetWorkspaceById } from "@/hooks/apis/workspace/useGetWorkspaceById";
import { Loader, LucideLoader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router"

const WorkspaceSwitcher = () => {

    const navigate = useNavigate();

    const { workspaceId } = useParams();

    const {isFetching, workspace} = useGetWorkspaceById(workspaceId);

    const {isFetching:isFetchingWorkspaces, workspaces} = useFetchWorkspaces()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    className='size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-800 text-xl'
                >
                    {isFetching ? (<Loader className='size-5 animate-spin' />):workspace?.name.charAt(0).toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    className='cursor-pointer flex-col justify-start items-start'
                >
                    {workspace?.name}
                    <span className="text-xs text-muted-foreground">(Active Workspace)</span>
                </DropdownMenuItem>
                {
                    isFetchingWorkspaces?(<Loader className='size-5 animate-spin' />)
                    : workspaces?.map((workspace)=>{
                        if(workspace._id == workspaceId){
                            return null;
                        }
                        return(
                            <DropdownMenuItem className='cursor-pointer flex-col justify-start items-start' key={workspace.id}
                                onClick={()=>navigate(`/workspaces/${workspace._id}`)}
                            >
                                <p className="truncate">
                                    {workspace?.name}
                                </p>
                            </DropdownMenuItem>
                        )
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default WorkspaceSwitcher