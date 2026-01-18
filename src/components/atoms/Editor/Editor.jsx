import React, { useEffect, useRef, useState } from 'react'

import Quill from 'quill';

const Editor = ({
  variant='create',
  onSubmit,
  onCancel,
  placeholder,
  disabled,
  defaultValue
}) => {
  const [text,setText] = useState('');
  const [isToolbarVisible,setIsToolbarVisible] = useState(false);

  const containerRef = useRef();
  const submitRef = useRef();
  const disabledRef = useRef();
  const defaultValueRef = useRef();
  const quillRef = useRef();
  const placeholderRef = useRef();

  useEffect(()=>{
    if(!containerRef.current) return;
    const container = containerRef.current;

    const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));

    const options = {
      theme:'snow',
      placeholder:placeholderRef.current,
      modules:{
        toolbar:[
          ['bold','italic','underline','strike'],
          ['link','image'],
          [{list:'ordered'},{list:'bullet'}],
          ['clean']
        ],
        Keyboard:{
          bindings:{
            enter:{
              key:'Enter',
              handler:()=>{
                return;
              }
            },
            shift_enter:{
              key:'Enter',
              shiftKey:true,
              handler:()=>{
                quill.insertText(quill.getSelection()?.index || '\n');
              }
            }
          }
        }
      }
    }

    const quill = new Quill(editorContainer,options);

    quillRef.current = quill;
    quillRef.current.focus();

    quill.setContents(defaultValueRef.current);

  },[]);

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white transition focus-within:">
        <div ref={containerRef}>
        </div>
      </div>
    </div>
  )
}

export default Editor