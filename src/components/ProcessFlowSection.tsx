import { CarbonCaptureSchematic } from './CarbonCaptureSchematic';
import { BlueprintBackground } from './BlueprintBackground';

export function ProcessFlowSection() {
  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <BlueprintBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-black px-4 py-2 bg-white mb-4">
            <span className="font-mono text-xs tracking-widest">PROCESS SCHEMATIC</span>
          </div>
          <h2 className="text-black mb-4" style={{ fontSize: '3.5rem', fontWeight: 700 }}>
            Carbon Capture Flow Diagram
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Chemical absorption process utilizing rich MEA (monoethanolamine) with integrated heat recovery.<br />
            <span className="text-red-600 font-mono">Red pathways indicate thermal energy transfer zones.</span>
          </p>
        </div>

        <div className="mb-12">
          <CarbonCaptureSchematic />
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="border-2 border-gray-800 bg-white p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-mono text-xl" style={{ fontWeight: 700 }}>
                01
              </div>
              <div className="flex-1">
                <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Absorption Stage</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Flue gas contacts lean amine solution in absorption tower. CO₂ chemically bonds with MEA, producing rich amine solution.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <div className="text-gray-500 mb-1">TEMPERATURE</div>
                  <div className="text-black">40-60°C</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">PRESSURE</div>
                  <div className="text-black">1.1-1.3 bar</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">MEA CONC.</div>
                  <div className="text-black">30 wt%</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">CO₂ REMOVAL</div>
                  <div className="text-red-600">90%+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-800 bg-white p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-red-600 bg-red-50 flex items-center justify-center font-mono text-xl text-red-600" style={{ fontWeight: 700 }}>
                02
              </div>
              <div className="flex-1">
                <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Heat Exchange</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-red-600 font-mono">Critical thermal optimization zone.</span> Rich amine preheated by hot lean amine, reducing reboiler energy requirements by 40%.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-red-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <div className="text-gray-500 mb-1">INLET TEMP</div>
                  <div className="text-black">40°C</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">OUTLET TEMP</div>
                  <div className="text-red-600">95°C</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">ΔENERGY</div>
                  <div className="text-red-600">-18.4 GJ/h</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">EFFICIENCY</div>
                  <div className="text-red-600">94.2%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-800 bg-white p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-red-600 bg-red-50 flex items-center justify-center font-mono text-xl text-red-600" style={{ fontWeight: 700 }}>
                03
              </div>
              <div className="flex-1">
                <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Desorption & Reboiler</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-red-600 font-mono">High-temperature regeneration.</span> Steam reboiler provides heat to break CO₂-amine bonds, regenerating lean amine for reuse.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-red-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <div className="text-gray-500 mb-1">TEMPERATURE</div>
                  <div className="text-red-600">120°C</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">PRESSURE</div>
                  <div className="text-black">1.8-2.0 bar</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">HEAT DUTY</div>
                  <div className="text-red-600">3.7 GJ/tCO₂</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">CO₂ PURITY</div>
                  <div className="text-black">99.9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
