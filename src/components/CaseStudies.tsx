import Link from 'next/link'

export default function CaseStudies() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory and AI-powered recommendations.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      image: '/case-study-1.jpg',
    },
    {
      title: 'Healthcare App',
      description: 'Telemedicine platform connecting patients with healthcare providers securely.',
      tech: ['React Native', 'Node.js', 'WebRTC'],
      image: '/case-study-2.jpg',
    },
    {
      title: 'FinTech Dashboard',
      description: 'Real-time financial analytics dashboard with interactive charts and reporting.',
      tech: ['Vue.js', 'D3.js', 'Python'],
      image: '/case-study-3.jpg',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Case Studies
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Explore our recent projects and see how we have helped businesses succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                <span className="text-6xl opacity-20">📁</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-block px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

