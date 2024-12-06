import { Typography, Input, Slider, Rate, Card, Row, Col, Space } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [ratingFilter, setRatingFilter] = useState(0)

  // Fetch printers with their owners
  const { data: printers, isLoading } = Api.printer.findMany.useQuery({
    include: {
      user: true,
      reviews: true,
    },
  })

  // Filter printers based on search and filters
  const filteredPrinters = printers?.filter(printer => {
    const matchesSearch =
      printer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      printer.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      printer.specifications?.toLowerCase().includes(searchQuery.toLowerCase())

    const pricePerHour = parseFloat(printer.pricePerHour || '0')
    const matchesPrice =
      pricePerHour >= priceRange[0] && pricePerHour <= priceRange[1]

    const rating = parseFloat(printer.rating || '0')
    const matchesRating = rating >= ratingFilter

    return matchesSearch && matchesPrice && matchesRating
  })

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={1}>
          <i className="las la-print" /> Find 3D Printer Owners
        </Title>
        <Text type="secondary">
          Browse through our network of verified 3D printer owners and find the
          perfect match for your printing needs.
        </Text>

        <div style={{ margin: '24px 0' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Input
              prefix={<i className="las la-search" />}
              placeholder="Search by printer name, owner, or specifications..."
              onChange={e => setSearchQuery(e.target.value)}
              size="large"
            />

            <div>
              <Text strong>Price Range (per hour)</Text>
              <Slider
                range
                min={0}
                max={1000}
                defaultValue={[0, 1000]}
                onChange={value => setPriceRange(value as [number, number])}
              />
            </div>

            <div>
              <Text strong>Minimum Rating</Text>
              <Rate allowHalf value={ratingFilter} onChange={setRatingFilter} />
            </div>
          </Space>
        </div>

        {isLoading ? (
          <Text>Loading printers...</Text>
        ) : (
          <Row gutter={[16, 16]}>
            {filteredPrinters?.map(printer => (
              <Col xs={24} sm={12} md={8} lg={6} key={printer.id}>
                <Card
                  hoverable
                  onClick={() => navigate(`/printers/${printer.id}`)}
                  cover={
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                      <i
                        className="las la-print"
                        style={{ fontSize: '48px' }}
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={printer.name}
                    description={
                      <Space direction="vertical">
                        <Text>
                          <i className="las la-user" />{' '}
                          {printer.user?.name || 'Anonymous'}
                        </Text>
                        <Text>
                          <i className="las la-map-marker" />{' '}
                          {printer.location || 'Location N/A'}
                        </Text>
                        <Text>
                          <i className="las la-dollar-sign" />{' '}
                          {printer.pricePerHour || '0'}/hour
                        </Text>
                        <Rate
                          disabled
                          allowHalf
                          value={parseFloat(printer.rating || '0')}
                        />
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </PageLayout>
  )
}
