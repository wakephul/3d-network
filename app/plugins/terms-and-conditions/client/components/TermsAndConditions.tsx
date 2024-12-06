import { Button, Flex, message as messageApi, Modal, Spin, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { useUserContext } from '~/core/context'
import { Api } from '~/core/trpc'
import { RichTextEditor, RichTextViewer } from '../../../richtext-editor'
import { ClipboardTool, CookieTool } from '../../../toolbox/client'

export const TermsAndConditions: React.FC = () => {
  const { checkRole } = useUserContext()

  const isAdmin = checkRole('ADMIN')

  const [isOpen, setOpen] = useState(() => {
    const isAccepted = CookieTool.get('terms-and-conditions')

    return !isAdmin && !isAccepted
  })

  const [message, setMessage] = useState<string>()

  const { data: termsAndConditions, isLoading: isLoadingFetch } =
    Api.termsAndConditions.read.useQuery()

  const { mutateAsync: updateTermsAndConditions, isLoading: isLoadingUpdate } =
    Api.termsAndConditions.write.useMutation()

  useEffect(() => {
    if (message) {
      messageApi.success(message)
    }
    setMessage(null)
  }, [message, messageApi])

  const handleChange = async (value: string) => {
    await updateTermsAndConditions({
      content: value,
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleCopyPrompt = async () => {
    await ClipboardTool.copy(`Based on the description of my app below, generate a light set of Terms and Conditions for my users.

# App Description:
[enter the description of your app here]
`)

    setMessage(`Prompt copied to clipboard succesfully.`)
  }

  const handleAccept = () => {
    CookieTool.set('terms-and-conditions', 'true')
    handleClose()
  }

  if (isLoadingFetch && !termsAndConditions) {
    return <Spin />
  }

  return (
    <>
      {isAdmin && (
        <Button type="primary" onClick={handleOpen}>
          Edit Terms and Conditions
        </Button>
      )}
      <Modal
        open={isOpen}
        footer={null}
        closable={isAdmin}
        onCancel={isAdmin ? handleClose : undefined}
        width="50%"
        centered
      >
        <div
          style={{
            height: '1000px',
            maxHeight: '800px',
            overflowY: 'auto',
          }}
        >
          {isAdmin ? (
            <RichTextEditor
              onChange={handleChange}
              initialValue={termsAndConditions}
            />
          ) : (
            <RichTextViewer value={termsAndConditions ?? ''} />
          )}
        </div>

        {!isAdmin && (
          <Button type="primary" className="mt-1" onClick={handleAccept} block>
            Accept
          </Button>
        )}

        {isAdmin && (
          <Flex align="center" justify="space-between">
            <Button size="small" onClick={handleCopyPrompt}>
              Generate with AI ✨
            </Button>
            <Tag color={!isLoadingUpdate && 'green'}>
              {isLoadingUpdate ? 'Saving' : 'Saved ✓'}
            </Tag>
          </Flex>
        )}
      </Modal>
    </>
  )
}
