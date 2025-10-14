import { BlueprintBackground } from './BlueprintBackground';

export function TechnicalSpecs() {
  return (
    <section className="relative min-h-screen bg-black text-white py-20 px-6">
      <div className="absolute inset-0 opacity-20">
        <BlueprintBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block border border-red-600 px-4 py-2 bg-red-600/10 mb-4">
            <span className="font-mono text-xs tracking-widest text-red-600">SYSTEM SPECIFICATIONS</span>
          </div>
          <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 700 }}>
            Neural Network Architecture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Deep learning model trained on 2.4B thermodynamic samples for real-time heat flux optimization
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          <div className="border-2 border-gray-700 bg-gray-900/50 p-8">
            <h3 className="mb-6 pb-4 border-b border-gray-700" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Model Parameters
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Architecture Type</span>
                <span className="font-mono text-white">12-Layer Transformer</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Total Parameters</span>
                <span className="font-mono text-white">847,233,280</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Training Dataset Size</span>
                <span className="font-mono text-white">2.4B samples</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Convergence Rate</span>
                <span className="font-mono text-red-600">98.4%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Inference Time</span>
                <span className="font-mono text-white">12ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-400">GPU Acceleration</span>
                <span className="font-mono text-white">NVIDIA A100 / H100</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-700 bg-gray-900/50 p-8">
            <h3 className="mb-6 pb-4 border-b border-gray-700" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Thermodynamic Constraints
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Temperature Range</span>
                <span className="font-mono text-white">-273°C to 2000°C</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Pressure Tolerance</span>
                <span className="font-mono text-white">0.001 - 500 MPa</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Heat Flux Resolution</span>
                <span className="font-mono text-white">0.01 W/m²</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">Thermal Conductivity</span>
                <span className="font-mono text-red-600">0.05 - 500 W/m·K</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="font-mono text-sm text-gray-400">CO₂ Adsorption Capacity</span>
                <span className="font-mono text-red-600">15.2 mmol/g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-gray-400">Surface Area (MOF-5)</span>
                <span className="font-mono text-white">3,847 m²/g</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-700 bg-gray-900/50 p-8">
          <h3 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Computational Requirements
          </h3>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">PROCESSING</div>
              <div className="mb-2 text-2xl text-white" style={{ fontWeight: 700 }}>64+</div>
              <div className="font-mono text-xs text-gray-400">CPU Cores</div>
              <div className="mt-3 pt-3 border-t border-gray-800">
                <div className="font-mono text-xs text-gray-500">AMD EPYC / Intel Xeon</div>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">MEMORY</div>
              <div className="mb-2 text-2xl text-white" style={{ fontWeight: 700 }}>256</div>
              <div className="font-mono text-xs text-gray-400">GB RAM</div>
              <div className="mt-3 pt-3 border-t border-gray-800">
                <div className="font-mono text-xs text-gray-500">ECC DDR4/DDR5</div>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">STORAGE</div>
              <div className="mb-2 text-2xl text-white" style={{ fontWeight: 700 }}>10</div>
              <div className="font-mono text-xs text-gray-400">TB NVMe</div>
              <div className="mt-3 pt-3 border-t border-gray-800">
                <div className="font-mono text-xs text-gray-500">PCIe Gen4/Gen5</div>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">ACCELERATION</div>
              <div className="mb-2 text-2xl text-red-600" style={{ fontWeight: 700 }}>A100</div>
              <div className="font-mono text-xs text-gray-400">GPU Required</div>
              <div className="mt-3 pt-3 border-t border-gray-800">
                <div className="font-mono text-xs text-gray-500">80GB VRAM minimum</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
