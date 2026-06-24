import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import ServicesOverview from '@/app/components/HomepageSections/ServicesOverview'
import WhyUs from '@/app/components/WhyUs'
import IndustriesServed from '@/app/components/HomepageSections/IndustriesServed'
import CleaningProcess from '@/app/components/HomepageSections/CleaningProcess'
import ServiceAreas from '@/app/components/HomepageSections/ServiceAreas'
import FAQ from '@/app/components/HomepageSections/FAQ'
import Testimonials from '@/app/components/HomepageSections/Testimonials'
import CTASection from '@/app/components/HomepageSections/CTASection'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyUs />
        <IndustriesServed />
        <CleaningProcess />
        <ServiceAreas />
        <FAQ />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}