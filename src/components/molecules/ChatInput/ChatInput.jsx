import Editor from '@/components/atoms/Editor/Editor'
import MessageRenderer from '@/components/atoms/MessageRenderer/MessageRenderer';
import React, { useState } from 'react'

export const ChatInput = () => {
  const [text, setText] = useState('');
  async function handleSubmit({body}) {
    console.log(body);
    setText(body);
  }
  return (
    <div className='px-5 w-full'  >
        <Editor
          onSubmit={handleSubmit}
          onCancel={()=>{}}
          disabled={false}
          defaultValue=""
        />
        {text && <MessageRenderer value={text} />}
    </div>
  )
}
