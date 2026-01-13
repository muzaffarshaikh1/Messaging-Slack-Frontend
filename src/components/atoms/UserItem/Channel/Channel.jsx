import React from 'react'
import { useParams } from 'react-router'

const Channel = () => {
    const {channelId} = useParams();
  return (
    <div>Channel: {channelId}</div>
  )
}

export default Channel