import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Table,
  Tag,
  Space,
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

export default function MyPrinterDashboardPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()

  // Fetch printer data
  const { data: printer, refetch: refetchPrinter } =
    Api.printer.findFirst.useQuery({
      where: { userId: user?.id },
      include: { printOrders: true, reviews: true },
    })

  // Mutations
  const { mutateAsync: updatePrinter } = Api.printer.update.useMutation()
  const { mutateAsync: updatePrintOrder } = Api.printOrder.update.useMutation()

  // States
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  // Handlers
  const handleProfileUpdate = async (values: any) => {
    if (!printer) return
    await updatePrinter({
      where: { id: printer.id },
      data: {
        name: values.name,
        specifications: values.specifications,
        location: values.location,
        pricePerGram: values.pricePerGram.toString(),
        pricePerHour: values.pricePerHour.toString(),
        status: values.status,
      },
    })
    refetchPrinter()
  }

  const handleOrderStatusUpdate = async (orderId: string, status: string) => {
    await updatePrintOrder({
      where: { id: orderId },
      data: { status },
    })
    refetchPrinter()
  }

  // Calculate statistics
  const totalEarnings =
    printer?.printOrders
      ?.filter(order => order.paymentStatus === 'PAID')
      ?.reduce(
        (sum, order) => sum + parseFloat(order.estimatedCost || '0'),
        0,
      ) || 0

  const completedOrders =
    printer?.printOrders?.filter(order => order.status === 'COMPLETED')
      ?.length || 0
  const averageRating =
    printer?.reviews?.reduce((sum, review) => sum + review.rating, 0) /
      (printer?.reviews?.length || 1) || 0

  const orderColumns = [
    { title: 'Order ID', dataIndex: 'id', key: 'id' },
    {
      title: 'Estimated Cost',
      dataIndex: 'estimatedCost',
      key: 'estimatedCost',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_: any, record: any) => (
        <Select
          defaultValue={record.status}
          style={{ width: 120 }}
          onChange={value => handleOrderStatusUpdate(record.id, value)}
          options={[
            { value: 'PENDING', label: 'Pending' },
            { value: 'PRINTING', label: 'Printing' },
            { value: 'COMPLETED', label: 'Completed' },
            { value: 'CANCELLED', label: 'Cancelled' },
          ]}
        />
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-print"></i> My Printer Dashboard
        </Title>
        <Text>Manage your 3D printing business from one place</Text>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Total Earnings"
                value={totalEarnings}
                prefix={<i className="las la-dollar-sign"></i>}
                precision={2}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Completed Orders"
                value={completedOrders}
                prefix={<i className="las la-check-circle"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Average Rating"
                value={averageRating}
                prefix={<i className="las la-star"></i>}
                precision={1}
              />
            </Card>
          </Col>
        </Row>

        <Card
          title={
            <>
              <i className="las la-cog"></i> Printer Profile
            </>
          }
          style={{ marginTop: 24 }}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              name: printer?.name,
              specifications: printer?.specifications,
              location: printer?.location,
              pricePerGram: parseFloat(printer?.pricePerGram || '0'),
              pricePerHour: parseFloat(printer?.pricePerHour || '0'),
              status: printer?.status,
            }}
            onFinish={handleProfileUpdate}
          >
            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="name"
                  label="Printer Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="location" label="Location">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name="specifications" label="Specifications">
                  <Input.TextArea rows={4} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item name="pricePerGram" label="Price per Gram ($)">
                  <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item name="pricePerHour" label="Price per Hour ($)">
                  <InputNumber min={0} step={0.01} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item name="status" label="Availability Status">
                  <Select
                    options={[
                      { value: 'AVAILABLE', label: 'Available' },
                      { value: 'BUSY', label: 'Busy' },
                      { value: 'OFFLINE', label: 'Offline' },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              <i className="las la-save"></i> Save Changes
            </Button>
          </Form>
        </Card>

        <Card
          title={
            <>
              <i className="las la-list"></i> Print Orders
            </>
          }
          style={{ marginTop: 24 }}
        >
          <Table
            dataSource={printer?.printOrders}
            columns={orderColumns}
            rowKey="id"
          />
        </Card>
      </div>
    </PageLayout>
  )
}
