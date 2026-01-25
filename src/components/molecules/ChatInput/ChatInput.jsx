import Editor from '@/components/atoms/Editor/Editor'
import React from 'react'

export const ChatInput = () => {
  async function handleSubmit({body}) {
    console.log(body);
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
