# Rich Text Editor Component

## Overview and Purpose

RichText Editor is a plugin for editing and viewing Notion-like rich text content.

## Usage

```tsx
const { data: blog } = Api.blog.findUnique.useQuery({ where: { id: blogId } })
const { mutateAsync: updateBlog } = Api.blog.update.useMutation()

function handleChange(value: string) {
  updateBlog({
    where: {
      id: blogId,
    },
    data: {
      content: value,
    },
  })
}

return (
  <RichTextEditor
    sideMenu={true}
    initialValue={blog?.content}
    onChange={handleChange}
    placeholder="Write something..."
  />
)
```

## Display Rich text content

```tsx
<RichTextViewer value={content} />
```

## Usage in a Form Ant Design

```tsx
<Form
  form={form}
  onFinish={async values => {
    // values.comment
  }}
>
  <Form.Item name={'comment'}>
    <RichTextEditor initialValue={''} placeholder="Add a comment..." />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Add Comment
    </Button>
  </Form.Item>
</Form>
```
