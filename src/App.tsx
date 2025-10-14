import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProcessFlowSection } from './components/ProcessFlowSection';
import { NeuralNetworkSection } from './components/NeuralNetworkSection';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { DataVisualization } from './components/DataVisualization';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="process">
        <ProcessFlowSection />
      </div>
      <div id="neural">
        <NeuralNetworkSection />
      </div>
      <div id="specs">
        <TechnicalSpecs />
      </div>
      <div id="data">
        <DataVisualization />
      </div>
      <Footer />
    </div>
  );
}
