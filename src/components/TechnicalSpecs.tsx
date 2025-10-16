import React from 'react';
export function TechnicalSpecs() {
  return (
    <section className="relative min-h-screen bg-white text-black py-20 px-6">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block border border-red-600 px-4 py-2 bg-red-600/5 mb-4">
            <span className="font-mono text-xs tracking-widest text-red-600">SYSTEM SPECIFICATIONS</span>
          </div>
          <h2 className="mb-4 text-black" style={{ fontSize: '3.5rem', fontWeight: 400 }}>
            EntroPINN Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
          Physics-Informed Neural Networks (PINNs) + your plant data to minimize heat, energy, and cost across any thermal or process system.
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 md:px-12 md:py-16">
              {/* Problem vs Solution Comparison */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Traditional Problems */}
                <div className="space-y-8">
                  <div className="mb-10">
                    <h4 className="text-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                      Current Industry Limitations
                    </h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h5 className="text-xl font-extrabold text-gray-900 mb-3">Slow Simulators</h5>
                        <p className="text-gray-700 text-base leading-relaxed">
                          Traditional process simulators are computationally intensive and too slow for real-time optimization. 
                          Delayed adjustments cannot respond to changing plant conditions or market signals.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h5 className="text-xl font-extrabold text-gray-900 mb-3">Inefficient Controls</h5>
                        <p className="text-gray-700 text-base leading-relaxed">
                          Rule-based control systems operate on predefined parameters with limited adaptability, 
                          missing complex optimization opportunities and leading to significant energy waste.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h5 className="text-xl font-extrabold text-gray-900 mb-3">Limited Scalability</h5>
                        <p className="text-gray-700 text-base leading-relaxed">
                          Pilot projects struggle to translate successes to commercial scale due to increased complexity, 
                          capital costs, and operational variability not addressed in smaller implementations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EntroPINN Advantages */}
                <div className="space-y-8">
                  <div className="mb-10">
                    <h4 className="text-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                      EntroPINN's Competitive Edge
                    </h4>
                  </div>

                  <div className="space-y-6">
                    <div className="group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h5 className="text-xl font-extrabold text-green-900 mb-3">Physics-Informed ML</h5>
                        <p className="text-gray-800 text-base leading-relaxed font-medium">
                          Adaptive ML optimization integrating fundamental thermodynamic principles for enhanced accuracy 
                          and robustness in predictions and real-time control strategies.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h5 className="text-xl font-extrabold text-teal-900 mb-3">Real-Time Optimization</h5>
                        <p className="text-gray-800 text-base leading-relaxed font-medium">
                          Proactive energy and heat optimization layer delivering recommendations every 10-30 seconds 
                          with &lt;1s compute latency for immediate response to changing conditions.
                        </p>
                      </div>
                    </div>

                    <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h5 className="text-xl font-extrabold text-purple-900 mb-3">Seamless Integration</h5>
                        <p className="text-gray-800 text-base leading-relaxed font-medium">
                          No hardware modifications required. Purpose-built for CCS heat optimization, 
                          trained on real plant + DoE data to deliver measurable efficiency gains immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
