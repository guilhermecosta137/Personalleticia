import {
  HeroSection,
  SocialProofStrip,
  MethodSection,
  ForWhoSection,
  TestimonialsSection,
  ServicesOverview,
  FAQSection,
  FinalCTA,
} from '@/components/home'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProofStrip />
      <MethodSection />
      <ForWhoSection />
      <TestimonialsSection />
      <ServicesOverview />
      <FAQSection />
      <FinalCTA />
    </main>
  )
}
