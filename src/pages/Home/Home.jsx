import UserButton from '@/components/atoms/UserButton/UserButton'
import { useCreateWorkspaceModal } from '@/hooks/apis/workspace/context/useCreateWorkspaceModal';
import { useFetchWorkspaces } from '@/hooks/apis/workspace/useFetchWorkspaces'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const {isFetching,workspaces} = useFetchWorkspaces();

  const navigate = useNavigate();

  const {setOpenCreateWorkspaceModal} = useCreateWorkspaceModal()
  
  useEffect(() => {
    
    if(isFetching) return;
    
    console.log("workspaces",workspaces);
    
    if(workspaces.length == 0 || !workspaces){
      setOpenCreateWorkspaceModal(true);
      console.log("no workspaces found creating one");
    }else{
      navigate(`/workspaces/${workspaces[0]._id}`)
    }

  }, [isFetching,workspaces,navigate])
  
  
  return (
    <>
        <UserButton/>
    </>
  )
}

export default Home