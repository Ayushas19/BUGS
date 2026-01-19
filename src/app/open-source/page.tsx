export default function OpenSourcePage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Open Source
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
            Contributing to the developer community through open source projects
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'cache-utils',
                description: 'A collection of utility functions for caching and memoization in JavaScript applications.',
                stars: '1.2k',
                language: 'TypeScript',
              },
              {
                name: 'next-auth-extended',
                description: 'Extended authentication solution for Next.js applications with additional providers.',
                stars: '856',
                language: 'TypeScript',
              },
              {
                name: 'react-hook-form-utils',
                description: 'Helper hooks and utilities for react-hook-form validation.',
                stars: '2.3k',
                language: 'TypeScript',
              },
              {
                name: 'tailwind-animate',
                description: 'Animation utilities for Tailwind CSS projects.',
                stars: '678',
                language: 'CSS',
              },
            ].map((repo) => (
              <div
                key={repo.name}
                className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
                  <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span className="text-gray-400">{repo.stars}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{repo.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                    {repo.language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

