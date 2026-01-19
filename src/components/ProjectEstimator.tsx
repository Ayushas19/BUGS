'use client'

import { useState } from 'react'

export default function ProjectEstimator() {
  const [features, setFeatures] = useState({
    responsive: false,
    api: false,
    database: false,
    auth: false,
    admin: false,
    payments: false,
  })
  const [complexity, setComplexity] = useState('medium')

  const basePrice = 5000
  const complexityMultipliers = {
    low: 1,
    medium: 1.5,
    high: 2.5,
  }

  const featurePrices = {
    responsive: 500,
    api: 1500,
    database: 1000,
    auth: 800,
    admin: 2000,
    payments: 1500,
  }

  const totalPrice =
    basePrice +
    Object.entries(features)
      .filter(([, enabled]) => enabled)
      .reduce((sum, [feature]) => sum + featurePrices[feature as keyof typeof featurePrices], 0) *
      complexityMultipliers[complexity as keyof typeof complexityMultipliers]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Project Estimator
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Get a rough estimate of your project cost
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Features</h3>
            {Object.entries(features).map(([feature, enabled]) => (
              <label
                key={feature}
                className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() =>
                    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature as keyof typeof prev] }))
                  }
                  className="w-5 h-5 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                />
                <span className="text-gray-300 capitalize">
                  {feature} (+${featurePrices[feature as keyof typeof featurePrices].toLocaleString()})
                </span>
              </label>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Complexity</h3>
            <div className="space-y-3">
              {(['low', 'medium', 'high'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setComplexity(level)}
                  className={`w-full p-4 rounded-lg border transition-colors ${
                    complexity === level
                      ? 'border-purple-500 bg-purple-500/10 text-white'
                      : 'border-gray-700 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <span className="capitalize font-medium">{level}</span>
                  <span className="float-right text-sm">
                    {level === 'low' && '1x'}
                    {level === 'medium' && '1.5x'}
                    {level === 'high' && '2.5x'}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">Estimated Cost</h3>
              <p className="text-4xl font-bold text-purple-400">
                ${totalPrice.toLocaleString()}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                This is an estimate. Final pricing may vary based on specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

