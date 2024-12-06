import {
  Typography,
  Table,
  Rate,
  Button,
  Modal,
  Input,
  Space,
  Tag,
  Tooltip,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyOrdersPage() {
  const { user } = useUserContext()
  const [reviewModalVisible, setReviewModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<string>('')
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>('')

  const { data: orders, refetch } = Api.printOrder.findMany.useQuery({
    where: { userId: user?.id },
    include: { printer: true },
    orderBy: { createdAt: 'desc' },
  })

  const { data: reviews } = Api.review.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: createReview } = Api.review.create.useMutation()

  const handleReviewSubmit = async () => {
    if (!selectedOrder || !rating || !user?.id) return

    const order = orders?.find(o => o.id === selectedOrder)
    if (!order) return

    try {
      await createReview({
        data: {
          rating,
          comment,
          userId: user.id,
          printerId: order.printerId,
        },
      })
      setReviewModalVisible(false)
      setRating(0)
      setComment('')
      refetch()
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  const getStatusColor = (status: string | null) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'orange'
      case 'in_progress':
        return 'blue'
      case 'completed':
        return 'green'
      case 'cancelled':
        return 'red'
      default:
        return 'default'
    }
  }

  const columns = [
    {
      title: 'Order Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => dayjs(date).format('MMM D, YYYY'),
    },
    {
      title: 'Printer',
      dataIndex: 'printer',
      key: 'printer',
      render: (printer: any) => printer?.name,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>
          {status?.replace('_', ' ').toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Estimated Cost',
      dataIndex: 'estimatedCost',
      key: 'estimatedCost',
      render: (cost: string) => `$${cost}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          <Tooltip title="Download Invoice">
            <Button type="text">
              <i className="las la-file-invoice" />
            </Button>
          </Tooltip>
          {record.status?.toLowerCase() === 'completed' &&
            !reviews?.some(r => r.printerId === record.printerId) && (
              <Tooltip title="Leave Review">
                <Button
                  type="text"
                  onClick={() => {
                    setSelectedOrder(record.id)
                    setReviewModalVisible(true)
                  }}
                >
                  <i className="las la-star" />
                </Button>
              </Tooltip>
            )}
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-shopping-bag" style={{ marginRight: 8 }} />
            My Orders
          </Title>
          <Text type="secondary">
            Track your 3D printing orders and manage your reviews
          </Text>
        </div>

        <Table
          dataSource={orders}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Leave a Review"
          open={reviewModalVisible}
          onOk={handleReviewSubmit}
          onCancel={() => {
            setReviewModalVisible(false)
            setRating(0)
            setComment('')
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <Text>Rating:</Text>
            <Rate value={rating} onChange={setRating} />
          </div>
          <div>
            <Text>Comment:</Text>
            <Input.TextArea
              value={comment}
              onChange={e => setComment(e.target.value)}
              rows={4}
            />
          </div>
        </Modal>
      </div>
    </PageLayout>
  )
}
