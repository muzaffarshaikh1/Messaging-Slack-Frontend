import { Button } from "@/components/ui/button";
import { useJoinWorkspace } from "@/hooks/apis/workspace/useJoinWorkspace";
import { Link, useNavigate, useParams } from "react-router"
import VerificationInput from "react-verification-input";
import { toast } from "sonner";

export const JoinPage = () => {
    const { workspaceId } = useParams();
    const navigate = useNavigate();
    const { joinWorkspaceMutation } = useJoinWorkspace(workspaceId)

    async function handleAddMemberToWorkspace(data) {
        console.log(data)
        try {
            await joinWorkspaceMutation(data);
            toast.success('You have been Added to workspace');
            navigate(`/workspaces/${workspaceId}`);
        } catch (error) {
            console.log('error adding member to workspace')
        }
    }
    return (
        <div className="h-[100vh] flex flex-col gap-y-8 items-center justify-center p-8 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex flex-col gap-y-2 items-center">
                    <h1 className="font-bold text-3xl">
                        Join the Workspace
                    </h1>
                    <p>Enter code you recived to join the workspace</p>
                </div>
                <VerificationInput
                    onComplete={handleAddMemberToWorkspace}
                    length={6}
                    classNames={{
                        container: 'flex gap-x-2',
                        character: 'h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
                        characterInactive: 'bg-muted',
                        characterFilled: 'bg-white text-black',
                        characterSelected: 'bg-white text-black',
                    }}
                    autoFocus
                />
            </div>
            <div className="flex gap-x-4">
                <Button size="lg" variant="outline">
                    <Link to={`/workspaces/${workspaceId}`}>Back to the workspace</Link>
                </Button>
            </div>
        </div>
    )
}
