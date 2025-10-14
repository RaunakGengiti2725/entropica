export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t-2 border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="mb-6 border-b-2 border-red-600 pb-2 inline-block" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              ENTROPICA
            </h3>
            <p className="text-sm text-gray-400 font-mono leading-relaxed">
              Advanced thermodynamic modeling and machine learning for industrial carbon capture systems.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
                <span className="font-mono text-xs text-gray-500">SYSTEM OPERATIONAL</span>
              </div>
              <div className="font-mono text-xs text-gray-500">Version 2.4.1-stable</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-xs mb-6 tracking-widest text-gray-500">SYSTEM ACCESS</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Technical Specs</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">System Status</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs mb-6 tracking-widest text-gray-500">RESEARCH</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Publications</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Materials Database</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Collaboration Portal</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Grant Programs</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Open Source</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs mb-6 tracking-widest text-gray-500">CONTACT</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Licensing</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Security Reports</a></li>
              <li><a href="#" className="text-white hover:text-red-600 transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t-2 border-gray-800 flex items-center justify-between">
          <p className="text-sm text-gray-500 font-mono">
            © 2025 Entropica Systems Inc. All computational models and algorithms proprietary.
          </p>
          <div className="flex items-center gap-8 font-mono text-xs text-gray-500">
            <span>BUILD: 2025.10.14</span>
            <span>PROTOCOL: TLS 1.3</span>
            <span className="flex items-center gap-2">
              STATUS: <span className="text-red-600">ONLINE</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
