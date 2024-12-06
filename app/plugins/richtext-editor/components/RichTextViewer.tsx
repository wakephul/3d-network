import { PartialBlock } from '@blocknote/core'
import { useCreateBlockNote } from '@blocknote/react'
import React, { useEffect, useState } from 'react'

interface RichTextViewerProps {
  value?: string
}

export const RichTextViewer: React.FC<RichTextViewerProps> = React.memo(
  ({ value }) => {
    const [html, setHtml] = useState<string | null>(null)

    function loadContent(content: string) {
      try {
        return JSON.parse(content) ?? undefined
      } catch (error) {
        return undefined
      }
    }

    const editor = useCreateBlockNote({
      initialContent: loadContent(value ?? '[]') as PartialBlock[],
    })

    const onChange = async () => {
      const htmlValue = await editor.blocksToFullHTML(editor.document)
      setHtml(htmlValue)
    }

    useEffect(() => {
      onChange()
    }, [value]) // Add value as a dependency to re-run when it changes

    return <div dangerouslySetInnerHTML={{ __html: html || '' }} />
  },
)

RichTextViewer.displayName = 'RichTextViewer'
