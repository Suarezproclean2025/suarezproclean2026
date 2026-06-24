const steps = [
  {
    number: '01',
    title: 'Free Consultation & Assessment',
    description: 'We conduct a thorough walkthrough of your facility to understand your specific cleaning needs, challenges, and expectations. This includes evaluating square footage, traffic patterns, and special requirements.',
  },
  {
    number: '02',
    title: 'Customized Cleaning Plan',
    description: 'Based on our assessment, we create a detailed cleaning plan tailored to your business. This includes specific tasks, frequencies, product preferences, and scheduling that works around your operations.',
  },
  {
    number: '03',
    title: 'Trained Team Assignment',
    description: 'We assign a dedicated, background-checked cleaning team trained in commercial cleaning best practices. Your team becomes familiar with your facility for consistent, quality results.',
  },
  {
    number: '04',
    title: 'Systematic Cleaning Execution',
    description: 'Our team follows a comprehensive checklist covering all areas: dusting, vacuuming, sanitizing, floor care, restroom cleaning, waste removal, and high-touch surface disinfection.',
  },
  {
    number: '05',
    title: 'Quality Inspection & Documentation',
    description: 'Every cleaning session includes photo documentation and quality checks. Supervisors conduct regular inspections to ensure our standards are met consistently.',
  },
  {
    number: '06',
    title: 'Ongoing Communication & Optimization',
    description: 'We maintain open communication with your team, responding to feedback within 24 hours and continuously optimizing our cleaning processes to exceed your expectations.',
  },
]

export default function CleaningProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Proven Commercial Cleaning Process
        </h2>
        
        <p className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto">
          At Suarez Cleaning Services, we follow a systematic, quality-driven approach to ensure your Orange County commercial space receives exceptional cleaning service every time.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-cyan-50 to-white rounded-xl p-8 border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute -top-4 -left-4 bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality Guarantee on Every Clean
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We stand behind our work with a 100% satisfaction guarantee. If you&apos;re not completely satisfied with any aspect of our cleaning service, we&apos;ll re-clean the area at no additional cost within 24 hours of your request.
            </p>
            <p className="text-gray-700 font-medium">
              Licensed • Insured • Background-Checked Staff • Eco-Friendly Options Available
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
