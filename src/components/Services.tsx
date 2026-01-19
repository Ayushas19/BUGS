export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications built with modern frameworks and best practices.',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and beautiful digital experiences.',
      icon: '🎨',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud architecture and infrastructure on AWS, GCP, and Azure.',
      icon: '☁️',
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs that power your applications and integrations.',
      icon: '🔌',
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code.',
      icon: '⚙️',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          We offer comprehensive development services to turn your ideas into reality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

