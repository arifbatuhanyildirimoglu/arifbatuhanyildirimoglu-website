'use client';

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import { useCallback, useEffect } from 'react';

const lowlight = createLowlight(common);

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const addLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Enter the URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Enter the image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-700 p-2 mb-4 flex flex-wrap gap-2">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Heading 1"
        type="button"
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Heading 2"
        type="button"
      >
        H2
      </button>
      <div className="w-px h-6 bg-gray-700 mx-1" />
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Bold"
        type="button"
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Italic"
        type="button"
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-2 py-1 rounded ${editor.isActive('strike') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Strike"
        type="button"
      >
        <s>S</s>
      </button>
      <div className="w-px h-6 bg-gray-700 mx-1" />
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded ${editor.isActive('bulletList') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Bullet List"
        type="button"
      >
        • List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 rounded ${editor.isActive('orderedList') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Numbered List"
        type="button"
      >
        1. List
      </button>
      <div className="w-px h-6 bg-gray-700 mx-1" />
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 py-1 rounded ${editor.isActive('blockquote') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Quote"
        type="button"
      >
        &ldquo;Quote&rdquo;
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-2 py-1 rounded ${editor.isActive('codeBlock') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Code Block"
        type="button"
      >
        {`<>Code</>`}
      </button>
      <div className="w-px h-6 bg-gray-700 mx-1" />
      <button
        onClick={addLink}
        className={`px-2 py-1 rounded ${editor.isActive('link') ? 'bg-gray-700' : 'bg-gray-800'} text-white hover:bg-gray-700`}
        title="Add Link"
        type="button"
      >
        🔗 Link
      </button>
      <button
        onClick={addImage}
        className="px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700"
        title="Add Image"
        type="button"
      >
        🖼️ Image
      </button>
    </div>
  );
};

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onBlur?: () => void;
}

export default function RichTextEditor({ content, onChange, onBlur }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:text-blue-600 underline',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full',
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: 'bg-gray-800 rounded-lg p-4',
        },
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-p:my-4 prose-pre:p-0 prose-pre:bg-transparent max-w-none min-h-[200px] focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onBlur: () => {
      onBlur?.();
    },
  });

  // Update content when it changes externally
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className="border border-gray-700 rounded-md overflow-hidden bg-gray-800">
      <MenuBar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
} 