import {
  Typography,
  Card,
  Rate,
  Button,
  Divider,
  Row,
  Col,
  message,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PrinterOwnerProfilePage() {
  const { ownerId } = useParams()
  const navigate = useNavigate()

  const { data: printer, isLoading } = Api.printer.findFirst.useQuery({
    where: { userId: ownerId },
    include: {
      user: true,
      reviews: {
        include: {
          user: true,
        },
      },
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <i className="las la-spinner la-spin la-3x"></i>
        </div>
      </PageLayout>
    )
  }

  if (!printer) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Title level={4}>Printer not found</Title>
        </div>
      </PageLayout>
    )
  }

  const handleContactOwner = () => {
    message.info('Redirecting to chat...')
    // Navigate to chat page or open chat modal
  }

  const handlePrintRequest = () => {
    navigate(`/printers/${ownerId}/request`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={16}>
            <Card>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <img
                  src={printer.user?.pictureUrl}
                  alt={printer.user?.name}
                  style={{ width: '64px', height: '64px', borderRadius: '50%' }}
                />
                <div>
                  <Title level={3}>{printer.user?.name}</Title>
                  <Rate disabled defaultValue={Number(printer.rating) || 0} />
                </div>
              </div>

              <Divider />

              <Title level={4}>
                <i className="las la-print"></i> Printer Details
              </Title>
              <Paragraph>
                <strong>Name:</strong> {printer.name}
              </Paragraph>
              <Paragraph>
                <strong>Location:</strong> {printer.location}
              </Paragraph>
              <Paragraph>
                <strong>Specifications:</strong> {printer.specifications}
              </Paragraph>

              <Divider />

              <Title level={4}>
                <i className="las la-dollar-sign"></i> Pricing
              </Title>
              <Paragraph>
                <strong>Price per gram:</strong> {printer.pricePerGram}
              </Paragraph>
              <Paragraph>
                <strong>Price per hour:</strong> {printer.pricePerHour}
              </Paragraph>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Button type="primary" onClick={handlePrintRequest}>
                  <i className="las la-print"></i> Request Print
                </Button>
                <Button onClick={handleContactOwner}>
                  <i className="las la-envelope"></i> Contact Owner
                </Button>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              title={
                <>
                  <i className="las la-star"></i> Customer Reviews
                </>
              }
            >
              {printer.reviews?.map(review => (
                <div key={review.id} style={{ marginBottom: '1rem' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Text strong>{review.user?.name}</Text>
                    <Rate disabled defaultValue={review.rating} />
                  </div>
                  <Paragraph>{review.comment}</Paragraph>
                  <Text type="secondary">
                    {dayjs(review.createdAt).format('MMM D, YYYY')}
                  </Text>
                  <Divider />
                </div>
              ))}
              {(!printer.reviews || printer.reviews.length === 0) && (
                <Text type="secondary">No reviews yet</Text>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
