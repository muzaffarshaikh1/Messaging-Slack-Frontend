import Editor from '@/components/atoms/Editor/Editor'
import React from 'react'

export const ChatInput = () => {
  return (
    <div className='px-5 w-full'  >
        <Editor
          onSubmit={()=>{}}
          onCancel={()=>{}}
          disabled={false}
          defaultValue=""
        />
    </div>
  )
}
