import React from 'react';
import { CarbonCaptureSchematic } from './CarbonCaptureSchematic';

export function ProcessFlowSection() {
  return (
    <section className="relative min-h-screen py-20 px-6 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-black px-4 py-2 bg-white mb-4">
            <span className="font-mono text-xs tracking-widest">PROCESS SCHEMATIC</span>
          </div>
          <h2 className="text-black mb-4" style={{ fontSize: '3.5rem', fontWeight: 400 }}>
            Industrial Heat Is Too Costly
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Across industries, heat is the single largest energy expense.<br />
            Even a 1% efficiency gain in thermal systems can translate to millions in annual savings and substantial emission reductions.<br />
            <span className="text-red-600">Our Focus Example: Carbon Capture</span>
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
                <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Reboiler Cost</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                High heat demand for solvent regeneration. Conventional MEA systems burn 3–4+ GJ of steam per tonne of CO₂ just to break the CO₂–amine bond and boil water in the stripper.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <div className="text-gray-500 mb-1">HEAT COST</div>
                  <div className="text-red-600">70%</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">OTHER COSTS</div>
                  <div className="text-black">30%</div>
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
                <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Optimization Problem</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                Flue-gas CO₂, temperature, humidity, and load fluctuate hourly; operators juggle dozens of setpoints and often<span className="text-red-600 font-mono"> run systems conservatively, wasting energy</span> to protect capture rate.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-red-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <div className="text-gray-500 mb-1">SETPOINT DRIFT</div>
                  <div className="text-red-600">2–10%</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">ENERGY OVERUSE</div>
                  <div className="text-red-600">5–20%</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">CAPTURE VARIANCE</div>
                  <div className="text-red-600">2–6%</div>
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
                <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Our Solution</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-red-600 font-mono">Physics Informed Neural Networks.</span> We use plant data to minimize heat use and optimize your entire process—not just heat optimization.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-red-200 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <div className="text-gray-500 mb-1">PLANT CALIBRATED</div>
                  
                </div>
                <div>
                  <div className="text-gray-500 mb-1">TAILORED SOLUTIONS</div>
                  
                </div>
                <div>
                  <div className="text-gray-500 mb-1">BEYOND HEAT</div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
