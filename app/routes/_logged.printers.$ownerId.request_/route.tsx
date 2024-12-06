import {
  Typography,
  Form,
  Upload,
  InputNumber,
  Select,
  Button,
  Card,
  Row,
  Col,
  message,
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

export default function PrintRequestPage() {
  const { ownerId } = useParams()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [fileUrl, setFileUrl] = useState('')
  const [estimatedTime, setEstimatedTime] = useState<number>(0)
  const [estimatedCost, setEstimatedCost] = useState<string>('0')

  // Get printer details
  const { data: printer } = Api.printer.findFirst.useQuery({
    where: { id: ownerId },
    include: { user: true },
  })

  // Upload hook
  const { mutateAsync: upload } = useUploadPublic()

  // Create print order mutation
  const { mutateAsync: createOrder } = Api.printOrder.create.useMutation()

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    try {
      const result = await upload({ file })
      setFileUrl(result.url)

      // Mock calculations based on file size
      const mockTime = (file.size / 1024 / 1024) * 2 // 2 hours per MB
      const mockCost = ((file.size / 1024 / 1024) * 5).toFixed(2) // $5 per MB

      setEstimatedTime(mockTime)
      setEstimatedCost(mockCost)

      return false // Prevent default upload behavior
    } catch (error) {
      message.error('Failed to upload file')
      return false
    }
  }

  // Handle form submission
  const handleSubmit = async (values: any) => {
    try {
      if (!fileUrl) {
        message.error('Please upload a 3D model file')
        return
      }

      await createOrder({
        data: {
          modelFileUrl: fileUrl,
          specifications: JSON.stringify(values),
          estimatedTime,
          estimatedCost,
          status: 'PENDING',
          deliveryAddress: values.deliveryAddress,
          paymentStatus: 'PENDING',
          userId: printer?.userId || '',
          printerId: ownerId || '',
        },
      })

      message.success('Print request submitted successfully')
      navigate('/my-orders')
    } catch (error) {
      message.error('Failed to submit print request')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-print" /> Submit Print Request
        </Title>
        <Text>Upload your 3D model and specify your printing preferences</Text>

        <Card style={{ marginTop: 24 }}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label="Upload 3D Model" required>
                  <Upload.Dragger
                    accept=".stl,.obj,.3mf"
                    beforeUpload={handleFileUpload}
                    maxCount={1}
                  >
                    <p>
                      <i
                        className="las la-cloud-upload-alt"
                        style={{ fontSize: 32 }}
                      />
                    </p>
                    <p>Click or drag file to upload</p>
                  </Upload.Dragger>
                </Form.Item>
              </Col>

              {fileUrl && (
                <>
                  <Col span={12}>
                    <Card size="small">
                      <Text>Estimated Time: </Text>
                      <Text strong>{estimatedTime.toFixed(1)} hours</Text>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card size="small">
                      <Text>Estimated Cost: </Text>
                      <Text strong>${estimatedCost}</Text>
                    </Card>
                  </Col>
                </>
              )}

              <Col span={24}>
                <Form.Item name="quality" label="Print Quality">
                  <Select>
                    <Select.Option value="draft">Draft (Fast)</Select.Option>
                    <Select.Option value="normal">Normal</Select.Option>
                    <Select.Option value="high">
                      High Quality (Slow)
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item name="infill" label="Infill Percentage">
                  <InputNumber
                    min={0}
                    max={100}
                    formatter={value => `${value}%`}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="deliveryAddress"
                  label="Delivery Address"
                  required
                >
                  <Select>
                    <Select.Option value="pickup">
                      Pickup from Printer
                    </Select.Option>
                    <Select.Option value="standard">
                      Standard Shipping
                    </Select.Option>
                    <Select.Option value="express">
                      Express Shipping
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    <i className="las la-shopping-cart" /> Proceed to Payment
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
