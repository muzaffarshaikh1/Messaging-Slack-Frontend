import ChannelHeader from '@/components/molecules/Channel/ChannelHeader';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import Message from '@/components/molecules/Message/Message';
import { useGetChannelById } from '@/hooks/apis/channel/useGetChannelById';
import { useGetChannelMessages } from '@/hooks/apis/channel/useGetChannelMessages';
import { useSocket } from '@/hooks/apis/useSocket';
import { Loader2Icon, Triangle, TriangleAlertIcon } from 'lucide-react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const Channel = () => {
  const { channelId } = useParams();

  const { channelDetails, isFetching, error } = useGetChannelById(channelId);

  const { joinChannel } = useSocket();

  const { messages} = useGetChannelMessages(channelId);

  console.log("messages:", messages, Array.isArray(messages));


  useEffect(() => {
    if (!isFetching && !error) {
      joinChannel(channelId);
    }
  }, [isFetching, error, joinChannel, channelId]);

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
    <div className='flex flex-col h-full' >
      <ChannelHeader name={channelDetails?.name} />
      {messages && messages.messages?.map((message) => {
        return <Message key={message._id} body={message.body} authorImage={message.senderId?.avatar}
          authorName={message.senderId?.username} createdAt={message.createdAt} />
      })}
      {/* {messages && JSON.stringify(messages)} */}
      <div className="flex-1" />
      <ChatInput />
    </div>
  )
}

export default Channel