import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Instant Price Quotes`,
      description: `Upload your 3D model and get instant quotes from local printer owners. No more back-and-forth emails or price negotiations.`,
      icon: <i className="las la-calculator"></i>,
    },
    {
      heading: `Verified Printer Network`,
      description: `Connect with trusted local printer owners who have been verified and rated by other users in your community.`,
      icon: <i className="las la-check-circle"></i>,
    },
    {
      heading: `Secure Payments`,
      description: `Pay securely through our platform with protection for both printer owners and customers.`,
      icon: <i className="las la-lock"></i>,
    },
    {
      heading: `Quality Assurance`,
      description: `Review detailed printer specifications and previous work samples to ensure your project meets quality standards.`,
      icon: <i className="las la-medal"></i>,
    },
    {
      heading: `Real-Time Updates`,
      description: `Track your print job status with real-time notifications and updates from start to finish.`,
      icon: <i className="las la-bell"></i>,
    },
    {
      heading: `Community Support`,
      description: `Join a thriving community of makers, creators and printer owners sharing tips and best practices.`,
      icon: <i className="las la-users"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Mike Chen`,
      designation: `Engineering Student`,
      content: `As a student, I couldn't afford my own 3D printer. This platform lets me print my engineering projects affordably while connecting with experienced makers in my area.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Miller`,
      designation: `Printer Owner`,
      content: `I've earned over $2,000 in the past 3 months by sharing my printer's downtime. The platform handles all the logistics so I can focus on delivering quality prints.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Park`,
      designation: `Product Designer`,
      content: `The instant quotes and verified printer network save me countless hours when prototyping designs for clients. Game-changing for my business.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for occasional printing needs`,
      monthly: 0,
      yearly: 0,
      features: [
        `Access to printer network`,
        `Secure payments`,
        `Basic support`,
      ],
    },
    {
      title: `Pro Creator`,
      description: `For regular printing projects`,
      monthly: 29,
      yearly: 290,
      features: [
        `Priority access`,
        `Discounted rates`,
        `24/7 support`,
        `Analytics dashboard`,
      ],
      highlight: true,
    },
    {
      title: `Business`,
      description: `For teams and high-volume needs`,
      monthly: 99,
      yearly: 990,
      features: [
        `Dedicated account manager`,
        `Custom pricing`,
        `API access`,
        `Enterprise support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does pricing work?`,
      answer: `Printer owners set their own rates based on material costs, print time, and complexity. You'll get instant quotes before confirming any print job.`,
    },
    {
      question: `What if my print fails?`,
      answer: `Our platform offers protection for both parties. If a print fails due to printer error, you'll receive a refund or reprint at no additional cost.`,
    },
    {
      question: `How do I know if a printer owner is reliable?`,
      answer: `All printer owners are verified and rated by previous customers. You can review their profile, printing history, and community feedback before choosing.`,
    },
    {
      question: `What file formats are supported?`,
      answer: `We support all common 3D printing formats including STL, OBJ, and 3MF files. Our system automatically checks file compatibility with chosen printers.`,
    },
  ]

  const steps = [
    {
      heading: `Upload Your Design`,
      description: `Simply upload your 3D model and specify your requirements.`,
    },
    {
      heading: `Get Instant Quotes`,
      description: `Review quotes from local printer owners and choose your preferred provider.`,
    },
    {
      heading: `Secure Payment`,
      description: `Pay through our protected payment system to start your print job.`,
    },
    {
      heading: `Receive Your Print`,
      description: `Track progress and receive your completed print from the local provider.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💰`,
      title: `High upfront costs holding back your projects`,
    },
    {
      emoji: `🔍`,
      title: `Hours wasted searching for reliable printing services`,
    },
    {
      emoji: `😟`,
      title: `Uncertainty about print quality and delivery times`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Turn Your 3D Designs Into Reality Without Owning a Printer`}
        subtitle={`Access local 3D printing services on-demand. Save thousands on equipment costs while bringing your ideas to life.`}
        buttonText={`Start Printing Today`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/gaymBw-3dnetwork-b5T6`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`creators already printing`}
          />
        }
      />
      <LandingSocialProof title={`Featured on`} />
      <LandingPainPoints
        title={`97.8% of creators can't access 3D printing when they need it most`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`From Design to Reality in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Start 3D Printing Today`}
        subtitle={`Access professional 3D printing without the hefty investment`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Creators Already Bringing Their Ideas to Life`}
        subtitle={`See how our community is transforming the way we access 3D printing`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Start Printing at a Fraction of Equipment Costs`}
        subtitle={`Choose the plan that fits your printing needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Our 3D Printing Network`}
        subtitle={`Everything you need to know about getting started`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Turn Your Designs Into Reality?`}
        subtitle={`Join our community of creators and start printing today`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
