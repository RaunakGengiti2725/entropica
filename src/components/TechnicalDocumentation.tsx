export function TechnicalDocumentation() {
  const codeExample = `// Thermal optimization algorithm
function optimizeHeatFlux(
  material: Material,
  constraints: ThermalConstraints
): OptimizationResult {
  const model = new ThermodynamicModel({
    temperature: constraints.tempRange,
    pressure: constraints.pressure,
    surfaceArea: material.surfaceArea
  });
  
  return model.optimize({
    method: 'gradient_descent',
    iterations: 10000,
    learningRate: 0.001
  });
}`;

  return (
    <section className="min-h-screen bg-white py-20 px-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block mb-4 px-3 py-1 border border-red-600 bg-red-600/5">
            <span className="font-mono text-xs tracking-wider text-red-600">TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-5xl mb-4 text-black" style={{ fontWeight: 700 }}>
            System Implementation
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <div className="bg-black p-8 border border-gray-300">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-gray-400">optimization_engine.ts</span>
                <span className="font-mono text-xs text-red-600">CORE MODULE</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-300 p-6">
              <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>Computational Requirements</h3>
              <div className="space-y-3 text-sm font-mono">
                <div>
                  <div className="text-gray-500 mb-1">CPU</div>
                  <div>64+ cores recommended</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Memory</div>
                  <div>256 GB RAM minimum</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">GPU</div>
                  <div>NVIDIA A100 or equivalent</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Storage</div>
                  <div>10 TB NVMe SSD</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-6">
              <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>API Endpoints</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="text-gray-700">/api/v2/optimize</div>
                <div className="text-gray-700">/api/v2/simulate</div>
                <div className="text-gray-700">/api/v2/materials</div>
                <div className="text-gray-700">/api/v2/analytics</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="border border-gray-300 p-8">
            <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Material Properties Database</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="font-mono text-sm">MOF-5</div>
                  <div className="text-xs text-gray-500 font-mono">Metal-Organic Framework</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-red-600">3,800 m²/g</div>
                  <div className="text-xs text-gray-500 font-mono">Surface Area</div>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="font-mono text-sm">Zeolite 13X</div>
                  <div className="text-xs text-gray-500 font-mono">Aluminosilicate</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-red-600">12.8 mmol/g</div>
                  <div className="text-xs text-gray-500 font-mono">CO₂ Capacity</div>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="font-mono text-sm">Activated Carbon</div>
                  <div className="text-xs text-gray-500 font-mono">High-porosity variant</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-red-600">2,200 m²/g</div>
                  <div className="text-xs text-gray-500 font-mono">Surface Area</div>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <div className="font-mono text-sm">MgO-based Sorbent</div>
                  <div className="text-xs text-gray-500 font-mono">High-temperature capture</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-red-600">450°C</div>
                  <div className="text-xs text-gray-500 font-mono">Operating Temp</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 p-8">
            <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Optimization Algorithms</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Gradient Descent</span>
                  <span className="text-xs font-mono text-gray-500">98.4% accuracy</span>
                </div>
                <div className="w-full h-2 bg-gray-200">
                  <div className="h-2 bg-red-600" style={{ width: '98.4%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Monte Carlo Simulation</span>
                  <span className="text-xs font-mono text-gray-500">95.7% accuracy</span>
                </div>
                <div className="w-full h-2 bg-gray-200">
                  <div className="h-2 bg-red-600" style={{ width: '95.7%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Neural Network</span>
                  <span className="text-xs font-mono text-gray-500">99.1% accuracy</span>
                </div>
                <div className="w-full h-2 bg-gray-200">
                  <div className="h-2 bg-red-600" style={{ width: '99.1%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Genetic Algorithm</span>
                  <span className="text-xs font-mono text-gray-500">92.3% accuracy</span>
                </div>
                <div className="w-full h-2 bg-gray-200">
                  <div className="h-2 bg-red-600" style={{ width: '92.3%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
