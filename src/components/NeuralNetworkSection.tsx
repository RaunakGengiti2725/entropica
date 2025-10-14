import React from 'react';
import { NeuralWave3D } from './NeuralWave3D';

export function NeuralNetworkSection() {
  return (
    <section className="relative min-h-screen py-20 px-6 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-red-600 px-4 py-2 bg-white mb-4">
            <span className="font-mono text-xs tracking-widest text-red-600">NEURAL NETWORK VISUALIZATION</span>
          </div>
          <h2 className="text-black mb-4" style={{ fontSize: '3.5rem', fontWeight: 700 }}>
            3D Neural Wave Architecture
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Real-time visualization of neural network training dynamics with pulsing red pathways representing active connections and signal propagation across the optimization landscape.
          </p>
        </div>

        <div className="mb-12">
          <NeuralWave3D />
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">NETWORK TOPOLOGY</div>
            <div className="mb-4">
              <div className="text-3xl mb-2 text-red-600" style={{ fontWeight: 700 }}>847M</div>
              <div className="text-sm text-gray-600">Trainable Parameters</div>
            </div>
            <div className="border-t-2 border-gray-200 pt-4 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Input Layer</span>
                <span className="text-black">2048 nodes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Hidden Layers</span>
                <span className="text-black">12 × 16384</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Output Layer</span>
                <span className="text-black">512 nodes</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">TRAINING METRICS</div>
            <div className="mb-4">
              <div className="text-3xl mb-2 text-red-600" style={{ fontWeight: 700 }}>98.4%</div>
              <div className="text-sm text-gray-600">Validation Accuracy</div>
            </div>
            <div className="border-t-2 border-gray-200 pt-4 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Learning Rate</span>
                <span className="text-black">1e-4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Batch Size</span>
                <span className="text-black">256</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Epochs Trained</span>
                <span className="text-black">1,847</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-800 bg-white p-6">
            <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">OPTIMIZATION</div>
            <div className="mb-4">
              <div className="text-3xl mb-2 text-red-600" style={{ fontWeight: 700 }}>12ms</div>
              <div className="text-sm text-gray-600">Inference Latency</div>
            </div>
            <div className="border-t-2 border-gray-200 pt-4 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Optimizer</span>
                <span className="text-black">AdamW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Loss Function</span>
                <span className="text-black">MSE + L2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Throughput</span>
                <span className="text-black">847 samples/s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-2 border-gray-800 bg-white p-8">
          <h3 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Wave Dynamics Interpretation
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The 3D wave surface represents the loss landscape topology during gradient descent optimization. 
                Peaks and valleys indicate local minima and maxima in the multi-dimensional parameter space.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-red-600 font-mono">Red pulsing connections</span> visualize active neural pathways 
                with signal strength proportional to gradient magnitude and pulse frequency indicating backpropagation cycles.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-8">
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Wave Amplitude</div>
                  <div className="text-black">Represents error magnitude in prediction space</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Node Position</div>
                  <div className="text-black">Fixed to discrete grid representing feature space</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Pulse Frequency</div>
                  <div className="text-black">Correlates with weight update rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
