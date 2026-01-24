import React, { useEffect, useRef, useState } from 'react'
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import { PiTextAa } from 'react-icons/pi'
import { Button } from '@/components/ui/button';
import Hint from '../Hint/Hint';
import { ImageIcon } from 'lucide-react';

const Editor = ({
  // variant = 'create',
  // onSubmit,
  // onCancel,
  // placeholder,
  // disabled,
  // defaultValue
}) => {
  const [text, setText] = useState('');
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);

  const containerRef = useRef();
  const defaultValueRef = useRef();
  const quillRef = useRef();

  function toggleToolbar() {
    setIsToolbarVisible(!isToolbarVisible);
    const toolbar = containerRef.current.querySelector('.ql-toolbar');
    if (toolbar) {
      toolbar.classList.toggle('hidden');
    }
  }

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));

    const options = {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['link'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['clean']
        ],
        Keyboard: {
          bindings: {
            enter: {
              key: 'Enter',
              handler: () => {
                return;
              }
            },
            shift_enter: {
              key: 'Enter',
              shiftKey: true,
              handler: () => {
                quill.insertText(quill.getSelection()?.index || '\n');
              }
            }
          }
        }
      }
    }

    const quill = new Quill(editorContainer, options);

    quillRef.current = quill;
    quillRef.current.focus();

    quill.setContents(defaultValueRef.current);

  }, []);

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white transition focus-within:">
        <div className='h-full ql-custom' ref={containerRef} />
        <div className="flex px-2 pb-2 z-[5]">
          <Hint label={!isToolbarVisible?'hide toolbar':'show toolbar'} side='bottom' align='center' >
            <Button
              size='iconSm'
              variant='ghost'
              disabled={false}
              onClick={toggleToolbar}
            >
              <PiTextAa className="size-4" />
            </Button>
          </Hint>
          <Hint label={'image'} side='bottom' align='center' >
            <Button
              size='iconSm'
              variant='ghost'
              disabled={false}
              onClick={()=>{}}
            >
              <ImageIcon className="size-4" />
            </Button>
          </Hint>
        </div>
      </div>
      <p className='p-2 text-[10px] text-muted-foreground flex justify-end'>
        <strong>Shift + return</strong>{' '}to add new line
      </p>
    </div>
  )
}

export default Editor