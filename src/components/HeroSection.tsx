import { BlueprintBackground } from './BlueprintBackground';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      <BlueprintBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="border-2 border-black px-6 py-3 bg-white">
            <span className="font-mono tracking-widest" style={{ fontWeight: 700 }}>ENTROPICA SYSTEMS</span>
          </div>
        </div>
        
        <h1 className="mb-6 text-black" style={{ fontSize: '5rem', fontWeight: 700, lineHeight: 1.1 }}>
          THERMODYNAMIC HEAT<br />OPTIMIZATION PLATFORM
        </h1>
        
        <div className="mb-4">
          <div className="inline-block border border-red-600 bg-white px-4 py-2">
            <span className="font-mono text-red-600 tracking-wider" style={{ fontSize: '0.9rem' }}>
              CARBON CAPTURE • MATERIALS ENGINEERING • ML OPTIMIZATION
            </span>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Advanced computational framework for industrial-scale carbon capture<br />
            through thermodynamic modeling and neural network optimization
          </p>
        </div>
        
        <div className="flex gap-6 justify-center items-center mb-16">
          <button className="px-10 py-4 bg-black text-white border-2 border-black hover:bg-gray-900 transition-colors font-mono tracking-wider">
            SYSTEM ACCESS
          </button>
          <button className="px-10 py-4 bg-white text-black border-2 border-black hover:bg-gray-50 transition-colors font-mono tracking-wider">
            DOCUMENTATION
          </button>
        </div>

        {/* Technical specifications grid */}
        <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-2 tracking-wider">THERMAL EFFICIENCY</div>
            <div className="text-4xl text-red-600 mb-1" style={{ fontWeight: 700 }}>99.2<span className="text-2xl">%</span></div>
            <div className="font-mono text-xs text-gray-600">OPTIMIZED</div>
          </div>
          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-2 tracking-wider">CO₂ CAPTURE RATE</div>
            <div className="text-4xl text-red-600 mb-1" style={{ fontWeight: 700 }}>1.8<span className="text-2xl">Mt</span></div>
            <div className="font-mono text-xs text-gray-600">PER YEAR</div>
          </div>
          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-2 tracking-wider">MODEL ACCURACY</div>
            <div className="text-4xl text-red-600 mb-1" style={{ fontWeight: 700 }}>98.4<span className="text-2xl">%</span></div>
            <div className="font-mono text-xs text-gray-600">VALIDATED</div>
          </div>
          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-2 tracking-wider">ENERGY REDUCTION</div>
            <div className="text-4xl text-red-600 mb-1" style={{ fontWeight: 700 }}>34<span className="text-2xl">%</span></div>
            <div className="font-mono text-xs text-gray-600">VS BASELINE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
