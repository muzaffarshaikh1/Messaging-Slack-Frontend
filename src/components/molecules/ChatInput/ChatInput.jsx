import Editor from '@/components/atoms/Editor/Editor'
import MessageRenderer from '@/components/atoms/MessageRenderer/MessageRenderer';
import { useAuth } from '@/hooks/apis/auth/context/useAuth';
import { useSocket } from '@/hooks/apis/useSocket';
import { useCurrentWorkspace } from '@/hooks/apis/workspace/context/useCurrentWorkspace';
import React, { useState } from 'react'

export const ChatInput = () => {

  const {socket,currentChannel} = useSocket();
  const {auth} = useAuth();
  const {currentWorkspace} = useCurrentWorkspace();
  

  async function handleSubmit({body}) {
    console.log(body);
    socket?.emit('NewMessage',{
      channelId:currentChannel,
      body,
      senderId:auth?.user?._id,
      workspaceId:currentWorkspace?._id
     },(data)=>{
      console.log('Message sent',data)
     })
  }
  return (
    <div className='px-5 w-full'  >
        <Editor
          onSubmit={handleSubmit}
          onCancel={()=>{}}
          disabled={false}
          defaultValue=""
        />
    </div>
  )
}
