import ChannelHeader from '@/components/molecules/Channel/ChannelHeader';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/channel/useGetChannelById';
import { Loader2Icon, Triangle, TriangleAlertIcon } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router'

const Channel = () => {
  const { channelId } = useParams();

  const { channelDetails, isFetching, error } = useGetChannelById(channelId);

  if (isFetching) {
    return (
      <div className='h-full flex-1 flex items-center justify-center'>
        <Loader2Icon className='size-5 animate-spin text-muted-foreground' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='h-full flex-1 flex flex-col items-center justify-center gap-y-2' >
        <TriangleAlertIcon className='size-6 text-muted-foreground' />
        <span className='text-sm text-muted-foreground'>Channel Not Found</span>
      </div>
    )
  }

  return (
    <div  className='flex flex-col h-full' >
      <ChannelHeader name={channelDetails?.name} />
      <div className="flex-1"/>
      <ChatInput/>
      </div>
  )
}

export default Channel