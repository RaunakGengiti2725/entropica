import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
    country: '',
    numberOfUsers: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 border border-[#ef4444] text-[#ef4444] text-sm tracking-wider">
            CONTACT REQUEST
          </span>
        </div>

        <div className="mb-4">
          <h1 className="text-black">Get In Touch</h1>
        </div>

        <div className="mb-12">
          <p className="text-gray-600 max-w-3xl">
            Fill out the form below and our team will get back to you within 24-48 hours to discuss your requirements and next steps.
          </p>
        </div>

        <div>
          <div className="border border-gray-300 p-8">
            <h2 className="text-black mb-8">Submit Request</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                    FIRST NAME* 
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                    LAST NAME* 
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                  WORK EMAIL* 
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                    COMPANY* 
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                    JOB TITLE* 
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                  PHONE NUMBER* 
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                  COUNTRY* 
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23000000%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27m6 9 6 6 6-6%27/%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[center_right_0.5rem] bg-no-repeat"
                >
                  <option value="">Select...</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 bg-white text-black font-mono focus:outline-none focus:border-[#ef4444] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ef4444] text-white py-3 px-6 hover:bg-[#dc2626] transition-colors font-mono tracking-wide"
              >
                SUBMIT REQUEST
              </button>

              <p className="text-gray-500 text-sm font-mono">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-black underline hover:text-[#ef4444] transition-colors">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-wrap gap-8 text-gray-600 font-mono text-sm">
            <div>
              <span className="text-gray-400">Looking for support?</span>{' '}
              <a href="#" className="text-black hover:text-[#ef4444] transition-colors underline">
                Visit our help center
              </a>
            </div>
            <div>
              <span className="text-gray-400">Academic inquiry?</span>{' '}
              <a href="#" className="text-black hover:text-[#ef4444] transition-colors underline">
                Special pricing available
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}