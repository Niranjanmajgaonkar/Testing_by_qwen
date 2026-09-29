import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Reach Out</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Drop us a message or visit our cozy café!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Information</span>
              <h2 className="text-3xl font-bold text-emerald-950 mt-2 mb-8 tracking-tight">Visit Our Café</h2>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-950 mb-1">Address</h3>
                    <p className="text-slate-500 text-sm">123 Coffee Lane, Koregaon Park,<br />Pune, Maharashtra 411001</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-950 mb-1">Phone</h3>
                    <p className="text-slate-500 text-sm">+91 98765 43210</p>
                    <p className="text-slate-500 text-sm">+91 20 2612 3456</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-950 mb-1">Email</h3>
                    <p className="text-slate-500 text-sm">hello@brewandbean.in</p>
                    <p className="text-slate-500 text-sm">orders@brewandbean.in</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-950 mb-1">Opening Hours</h3>
                    <p className="text-slate-500 text-sm">Mon - Fri: 7:00 AM - 9:00 PM</p>
                    <p className="text-slate-500 text-sm">Sat - Sun: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-emerald-950 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((social) => (
                    <button
                      key={social}
                      className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-emerald-950 hover:border-emerald-950 hover:text-amber-400 transition-all duration-300"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100">
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Send Message</span>
              <h2 className="text-2xl font-bold text-emerald-950 mt-2 mb-8 tracking-tight">We'd Love to Hear From You</h2>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 outline-none transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 outline-none transition-all text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Request</option>
                      <option value="events">Private Events</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 outline-none transition-all resize-none text-sm"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-950 hover:bg-emerald-900 text-amber-400 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/20 text-sm tracking-wide"
                  >
                    SEND MESSAGE →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Location</span>
          <h2 className="text-3xl font-bold text-emerald-950 mt-2 mb-10 tracking-tight">Find Us Here</h2>
          <div className="bg-[#faf8f5] rounded-2xl p-10 shadow-sm border border-slate-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">🗺️</span>
            </div>
            <p className="text-emerald-950 font-semibold text-lg mb-1">123 Coffee Lane, Koregaon Park</p>
            <p className="text-slate-500 mb-5">Pune, Maharashtra 411001</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Located near the Oxford Garden, just a 5-minute walk from the main road.
              Free parking available for customers!
            </p>
            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-emerald-600">🚗</span> Free Parking
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-emerald-600">📶</span> Free WiFi
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-emerald-600">♿</span> Accessible
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
