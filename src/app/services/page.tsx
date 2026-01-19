import Services from '@/components/Services'

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>
      </section>
      <Services />
    </main>
  )
}

