import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen bg-white text-black py-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-red-600 px-4 py-2 bg-red-600/5 mb-4">
            <span className="font-mono text-xs tracking-widest text-red-600">CONTACT US</span>
          </div>
          <h1 className="mb-4 text-black" style={{ fontSize: '3.5rem', fontWeight: 400 }}>
            Let's Optimize Together
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Ready to revolutionize your thermal processes? Connect with our team of experts to discuss how our physics-informed neural networks can transform your operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form - Full Width */}
          <div className="border-2 border-gray-300 bg-white p-8">
            <h2 className="mb-6 pb-4 border-b border-gray-200" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors resize-vertical"
                  placeholder="Describe your thermal optimization needs or technical challenges..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 border-2 transition-all font-mono text-xs tracking-wider ${
                  isSubmitting 
                    ? 'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-black text-white border-black hover:bg-gray-900'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-600 text-green-600">
                  <span className="font-mono text-xs">Message sent successfully! We'll respond within 24 hours.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-600 text-red-600">
                  <span className="font-mono text-xs">Failed to send message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}