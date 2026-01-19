export default function FoundersPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            For Founders
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
            We understand the unique challenges founders face and are here to help you build faster
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'MVP Development',
                description: 'Get your minimum viable product to market quickly and efficiently.',
                icon: '🚀',
              },
              {
                title: 'Technical Partnership',
                description: 'Ongoing technical support and development as your team grows.',
                icon: '🤝',
              },
              {
                title: 'Technical Advisory',
                description: 'Strategic technology guidance for your startup journey.',
                icon: '💡',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="text-white font-semibold">Fast Time to Market</h4>
                  <p className="text-gray-400">Ship products in weeks, not months</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="text-white font-semibold">Cost Effective</h4>
                  <p className="text-gray-400">Competitive rates for startups</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="text-white font-semibold">Product Focused</h4>
                  <p className="text-gray-400">We care about your business goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="text-white font-semibold">NDA Protected</h4>
                  <p className="text-gray-400">Your ideas stay yours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

