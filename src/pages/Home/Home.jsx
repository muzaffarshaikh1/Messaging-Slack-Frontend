import UserButton from '@/components/atoms/UserButton/UserButton'
import { useFetchWorkspace } from '@/hooks/apis/workspace/useFetchWorkspaces'
import React, { useEffect } from 'react'

const Home = () => {
  const {isFetching,workspaces} = useFetchWorkspace();
  
  useEffect(() => {
    
    if(isFetching) return;
    
    console.log("workspaces",workspaces);
    
    if(workspaces.length == 0 || !workspaces){
      console.log("no workspaces found creating one");
    }

  }, [isFetching,workspaces])
  
  
  return (
    <>
        <UserButton/>
    </>
  )
}

export default Home