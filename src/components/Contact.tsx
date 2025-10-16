import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    company: '',
    industry: '',
    interest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-white">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[700px]">
          {/* Left Side - Hero Content */}
          <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-block border border-white/30 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg mb-6">
                  <span className="font-mono text-xs tracking-widest text-white/90">THERMAL OPTIMIZATION</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Optimize Your 
                <br />
                <span className="text-red-100">Thermal Systems</span>
              </h1>
              
              <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed max-w-md">
                Partner with us to achieve <span className="font-mono text-white font-bold">5-15% energy reductions</span> through 
                Physics-Informed Neural Networks. Let's revolutionize your industrial processes.
              </p>

              {/* Key Stats */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="font-mono text-red-100">Real-time optimization every 10-30s</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="font-mono text-red-100">30-60% fewer off-spec excursions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="font-mono text-red-100">Proven in carbon capture &amp; chemical processing</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-white mb-4">Direct Partnership Line</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-red-100 font-mono text-sm">Email</span>
                     <span className="text-white font-mono text-sm">partnerships@entropinn.ai</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-100 font-mono text-sm">Response</span>
                    <span className="text-white font-mono text-sm">&lt; 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Become a Partner
                </h2>
                <p className="text-gray-600">
                  Ready to transform your thermal processes? Let's discuss your optimization goals.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs tracking-wider text-gray-500 mb-2">
                    FULL NAME*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-black focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider text-gray-500 mb-2">
                    PHONE NUMBER*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-black focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider text-gray-500 mb-2">
                    WORK EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-black focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider text-gray-500 mb-2">
                    COMPANY*
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-black focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider text-gray-500 mb-2">
                    INDUSTRY SECTOR*
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-black focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23666666%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m6 9 6 6 6-6%27/%3e%3c/svg%3e')] bg-[length:1rem] bg-[center_right_1rem] bg-no-repeat"
                  >
                    <option value="">Select your industry...</option>
                    <option value="carbon-capture">Carbon Capture &amp; Storage</option>
                    <option value="chemical">Chemical Processing</option>
                    <option value="power">Power Generation</option>
                    <option value="refining">Oil &amp; Gas Refining</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="steel">Steel &amp; Metals</option>
                    <option value="cement">Cement Production</option>
                    <option value="other">Other Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider text-gray-500 mb-2">
                    OPTIMIZATION INTEREST
                  </label>
                  <textarea
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-black focus:outline-none focus:border-red-500 focus:bg-white transition-all duration-200 resize-none"
                    placeholder="Describe your thermal optimization challenges, current energy costs, and efficiency goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-8 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors font-bold tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  START PARTNERSHIP DISCUSSION
                </button>

                <p className="text-gray-500 text-xs font-mono text-center leading-relaxed">
                  By submitting this form, you consent to being contacted by our partnerships team 
                  regarding thermal optimization solutions and agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
