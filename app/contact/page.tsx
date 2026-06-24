import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Commercial Cleaning Orange County | Suarez Cleaning',
  description: 'Request a free quote for commercial cleaning services in Orange County, CA. Fast response within 24 hours. Office cleaning, janitorial services, floor care & more. Call (949) 357-9256.',
  keywords: ['commercial cleaning quote Orange County', 'janitorial services estimate', 'office cleaning pricing Orange County', 'free cleaning quote OC'],
  openGraph: {
    title: 'Get a Free Quote | Suarez Cleaning Services Orange County',
    description: 'Request your free commercial cleaning quote today. Serving all of Orange County, CA. Licensed, insured & eco-friendly.',
    url: 'https://www.suarezproclean.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/contact',
  },
}

export default function Contact() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}
