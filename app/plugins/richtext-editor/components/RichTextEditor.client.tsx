import { LoadingOutlined } from '@ant-design/icons'
import { Block, BlockNoteEditor, locales, PartialBlock } from '@blocknote/core'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { Flex, Spin } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'

interface RichTextEditorProps {
  initialValue?: string
  isValueMarkdown?: boolean
  onChange?: (content: string) => void
  onChangeMarkdown?: (content: string) => void
  onChangeBlocks?: (blocks: Block[]) => void
  onBlur?: (content: string) => void
  placeholder?: string
  isLoading?: boolean
  className?: string
  sideMenu?: boolean
}

export type RichTextEditorRef = {
  updateContent: (markdown: string) => void
  editor: BlockNoteEditor
}

// eslint-disable-next-line react/display-name
export const RichTextEditor = React.forwardRef<
  RichTextEditorRef,
  RichTextEditorProps
>(
  (
    {
      initialValue,
      isValueMarkdown,
      onChange,
      onChangeMarkdown,
      onChangeBlocks,
      onBlur,
      placeholder,
      isLoading,
      className,
      sideMenu = false,
    },
    ref,
  ) => {
    const [initialContent, setInitialContent] =
      useState<PartialBlock[]>(undefined)

    useEffect(() => {
      const handleOnBlur = () => {
        if (onBlur) {
          onBlur(JSON.stringify(editor.document))
        }
      }
      editor._tiptapEditor.on('blur', handleOnBlur)

      return () => {
        editor._tiptapEditor.off('blur', handleOnBlur)
      }
    }, [])

    React.useImperativeHandle(ref, () => ({
      updateContent,
      editor,
    }))

    const handleChange = debounce(async (jsonBlocks: Block[]) => {
      if (onChangeBlocks) {
        onChangeBlocks(jsonBlocks)
      }

      if (onChange) {
        onChange(JSON.stringify(jsonBlocks))
      }

      if (onChangeMarkdown) {
        const markdownFromBlocks = await editor.blocksToMarkdownLossy(
          editor.document,
        )
        onChangeMarkdown(markdownFromBlocks)
      }
    }, 700)

    const updateContent = async (markdown: string) => {
      if (!editor) {
        return
      }

      const blocks = await editor.tryParseMarkdownToBlocks(markdown)

      editor.replaceBlocks(editor.document, blocks)
    }

    const loadContent = async (content: string): Promise<PartialBlock[]> => {
      if (isValueMarkdown) {
        return editor.tryParseMarkdownToBlocks(content)
      }

      try {
        return JSON.parse(content) ?? undefined
      } catch (error) {
        return undefined
      }
    }

    useEffect(() => {
      loadContent(initialValue).then(content => setInitialContent(content))
    }, [initialValue])

    useEffect(() => {}, [initialContent])

    const editor = useMemo(() => {
      if (initialValue === 'loading') {
        return undefined
      }

      return BlockNoteEditor.create({
        initialContent,
        domAttributes: {
          editor: {
            class: className,
            style:
              'padding-inline:0px;font-size:14px;background:transparent;color:inherit;',
          },
        },
        dictionary: {
          ...locales.en,
          placeholders: {
            ...locales.en.placeholders,
            default: placeholder ?? locales.en.placeholders.default,
          },
        },
      })
    }, [initialContent])

    if (editor === undefined) {
      return 'Loading content...'
    }

    return (
      <Flex style={{ height: '100%', width: '100%' }} vertical>
        <BlockNoteView
          onChange={() => handleChange(editor.document)}
          editor={editor}
          sideMenu={sideMenu}
          editable={!isLoading}
        />
        <Flex
          style={{ height: '100%', width: '100%' }}
          align="center"
          justify="center"
        >
          <Spin
            spinning={isLoading ? isLoading : false}
            indicator={<LoadingOutlined spin />}
            size="large"
          />
        </Flex>
      </Flex>
    )
  },
)

function debounce(func, delay) {
  let timeoutId

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
