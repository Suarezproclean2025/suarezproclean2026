const faqs = [
  {
    question: 'What commercial cleaning services do you offer in Orange County?',
    answer: 'Suarez Cleaning Services offers comprehensive commercial cleaning solutions including office cleaning, nightly janitorial services, floor care (stripping, waxing, buffing), post-construction cleaning, move-in/move-out cleaning, and day porter services. We serve all cities throughout Orange County, CA with customized cleaning plans tailored to your specific business needs.',
  },
  {
    question: 'How much does janitorial service cost in Orange County?',
    answer: 'Commercial janitorial pricing in Orange County varies based on facility size, cleaning frequency, and specific service requirements. Typical costs range from $0.05 to $0.20 per square foot for standard office cleaning. We provide free, no-obligation quotes tailored to your exact needs. Contact us at (949) 357-9256 for a customized estimate within 24 hours.',
  },
  {
    question: 'Are your cleaners insured and background-checked?',
    answer: 'Yes, absolutely. All Suarez Cleaning Services team members undergo thorough background checks before hiring. We are fully licensed, bonded, and insured with comprehensive liability coverage. Certificates of Insurance (COI) are available upon request for your building management or property requirements.',
  },
  {
    question: 'Do you provide eco-friendly cleaning options?',
    answer: 'Yes! We offer green cleaning solutions using EPA-approved, environmentally safe products that are effective yet gentle on the environment. Our eco-friendly cleaning options are ideal for businesses prioritizing sustainability, employee health, and reduced chemical exposure. Simply request green cleaning when getting your quote.',
  },
  {
    question: 'What areas of Orange County do you serve?',
    answer: 'We provide commercial cleaning services throughout Orange County, including Irvine, Newport Beach, Costa Mesa, Santa Ana, Anaheim, Huntington Beach, Fullerton, Tustin, Laguna Hills, Lake Forest, and all surrounding OC cities. No matter where your business is located in Orange County, we can serve you.',
  },
  {
    question: 'How often should commercial spaces be cleaned?',
    answer: 'Cleaning frequency depends on your business type, foot traffic, and industry requirements. Most offices benefit from daily or nightly cleaning 3-5 times per week. High-traffic facilities like retail stores or medical offices may require daily service. We\'ll recommend an optimal cleaning schedule during your free consultation.',
  },
  {
    question: 'Do you offer same-day or emergency cleaning services?',
    answer: 'Yes, we provide same-day and emergency cleaning services for urgent situations like spill cleanup, post-event cleaning, or unexpected facility needs. Our rapid response team can typically be on-site within a few hours. Call (949) 357-9256 for immediate assistance with emergency cleaning needs in Orange County.',
  },
  {
    question: 'What\'s included in your commercial cleaning checklist?',
    answer: 'Our comprehensive cleaning checklist includes: dusting all surfaces, vacuuming and mopping floors, sanitizing restrooms, cleaning and disinfecting high-touch areas (doorknobs, light switches, countertops), emptying trash and recycling, cleaning break rooms and kitchens, glass and window cleaning, and detailed task documentation with photo proof. Custom checklists are created for each client.',
  },
  {
    question: 'Can I get a certificate of insurance (COI) for my building?',
    answer: 'Absolutely. We understand that many commercial buildings and property managers require proof of insurance. We provide Certificates of Insurance (COI) promptly upon request at no additional cost. Our insurance coverage meets standard commercial building requirements throughout Orange County.',
  },
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions About Commercial Cleaning
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
          Get answers to common questions about our Orange County commercial cleaning services. Can&apos;t find what you&apos;re looking for? Call us at (949) 357-9256.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-cyan-600 transition-colors list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <svg
                  className="w-6 h-6 text-cyan-500 flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Have more questions? We&apos;re here to help!
          </p>
          <a
            href="tel:+19493579256"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
          >
            Call (949) 357-9256
          </a>
        </div>
      </div>
    </section>
  )
}
