import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const heatFluxData = [
  { time: 0, flux: 245, optimal: 250 },
  { time: 1, flux: 248, optimal: 250 },
  { time: 2, flux: 251, optimal: 250 },
  { time: 3, flux: 249, optimal: 250 },
  { time: 4, flux: 250, optimal: 250 },
  { time: 5, flux: 252, optimal: 250 },
  { time: 6, flux: 250, optimal: 250 },
  { time: 7, flux: 248, optimal: 250 },
  { time: 8, flux: 251, optimal: 250 },
  { time: 9, flux: 250, optimal: 250 },
  { time: 10, flux: 249, optimal: 250 },
];

const captureRateData = [
  { time: 0, rate: 72 },
  { time: 1, rate: 75 },
  { time: 2, rate: 78 },
  { time: 3, rate: 82 },
  { time: 4, rate: 85 },
  { time: 5, rate: 88 },
  { time: 6, rate: 91 },
  { time: 7, rate: 93 },
  { time: 8, rate: 95 },
  { time: 9, rate: 96 },
  { time: 10, rate: 98 },
];

export function DataVisualization() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block mb-4 px-3 py-1 border border-red-600 bg-red-600/5">
            <span className="font-mono text-xs tracking-wider text-red-600">REAL-TIME ANALYTICS</span>
          </div>
          <h2 className="text-5xl mb-4 text-black" style={{ fontWeight: 400 }}>
            System Performance Metrics
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Live monitoring and optimization of thermal systems with millisecond-precision feedback loops
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-300 p-6">
            <div className="mb-6">
              <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>Heat Flux Optimization</h3>
              <p className="text-sm font-mono text-gray-500">W/m² over time (seconds)</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={heatFluxData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="time" 
                  stroke="#6b7280"
                  style={{ fontSize: '12px', fontFamily: 'monospace' }}
                />
                <YAxis 
                  stroke="#6b7280"
                  domain={[240, 255]}
                  style={{ fontSize: '12px', fontFamily: 'monospace' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="flux" 
                  stroke="#dc2626" 
                  strokeWidth={2}
                  dot={{ fill: '#dc2626', r: 3 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="optimal" 
                  stroke="#9ca3af" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600"></div>
                <span className="font-mono text-gray-600">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-gray-400"></div>
                <span className="font-mono text-gray-600">Target</span>
              </div>
              <div className="font-mono text-gray-900">
                Δ: <span className="text-red-600">±0.8%</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 p-6">
            <div className="mb-6">
              <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>Carbon Capture Efficiency</h3>
              <p className="text-sm font-mono text-gray-500">Percentage over time (seconds)</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={captureRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="time" 
                  stroke="#6b7280"
                  style={{ fontSize: '12px', fontFamily: 'monospace' }}
                />
                <YAxis 
                  stroke="#6b7280"
                  domain={[70, 100]}
                  style={{ fontSize: '12px', fontFamily: 'monospace' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#dc2626" 
                  fill="#dc2626"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-between items-center text-sm">
              <div className="font-mono text-gray-600">
                Current: <span className="text-red-600">98.4%</span>
              </div>
              <div className="font-mono text-gray-600">
                Target: <span className="text-gray-900">95.0%</span>
              </div>
              <div className="font-mono text-green-600">
                +3.4% over target
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white border border-gray-300 p-6">
            <div className="font-mono text-xs text-gray-500 mb-2">SYSTEM STATUS</div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
              <span className="text-2xl" style={{ fontWeight: 600 }}>OPERATIONAL</span>
            </div>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-gray-500">Uptime</span>
                <span className="text-black">99.97%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Calibration</span>
                <span className="text-black">2.3 hrs ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 p-6">
            <div className="font-mono text-xs text-gray-500 mb-2">ENERGY CONSUMPTION</div>
            <div className="text-4xl mb-4 text-red-600" style={{ fontWeight: 700 }}>
              847.2 <span className="text-2xl text-gray-500">kW</span>
            </div>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-gray-500">Efficiency</span>
                <span className="text-black">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">vs. Baseline</span>
                <span className="text-green-600">-18.4%</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 p-6">
            <div className="font-mono text-xs text-gray-500 mb-2">CO₂ PROCESSED</div>
            <div className="text-4xl mb-4 text-red-600" style={{ fontWeight: 700 }}>
              1.84 <span className="text-2xl text-gray-500">Mt</span>
            </div>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-gray-500">This Quarter</span>
                <span className="text-black">0.47 Mt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Growth Rate</span>
                <span className="text-green-600">+12.3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
