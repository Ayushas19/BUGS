import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how we can help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

