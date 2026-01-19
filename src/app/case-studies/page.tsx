import CaseStudies from '@/components/CaseStudies'

export default function CaseStudiesPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
            Explore our recent work and see how we've helped businesses succeed
          </p>
        </div>
      </section>
      <CaseStudies />
    </main>
  )
}

