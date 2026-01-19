import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Building Digital
          <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          We craft exceptional digital products that help founders and companies
          build the future. Full-cycle development from concept to launch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Start a Project
          </Link>
          <Link
            href="/case-studies"
            className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  )
}

