import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import WhyUs from '@/app/components/WhyUs'
import Areas from '@/app/components/Areas'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Areas />
      </main>
      <Footer />
    </>
  )
}