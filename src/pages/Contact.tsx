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
      <section className="bg-gradient-to-br from-stone-900 to-amber-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Drop us a message or visit our cozy café!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Visit Our Café</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Address</h3>
                    <p className="text-stone-600">123 Coffee Lane, Koregaon Park,<br />Pune, Maharashtra 411001</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+91 98765 43210</p>
                    <p className="text-stone-600">+91 20 2612 3456</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">hello@brewandbean.in</p>
                    <p className="text-stone-600">orders@brewandbean.in</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Opening Hours</h3>
                    <p className="text-stone-600">Mon - Fri: 7:00 AM - 9:00 PM</p>
                    <p className="text-stone-600">Sat - Sun: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-stone-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((social) => (
                    <button
                      key={social}
                      className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all duration-300"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                  <p className="text-stone-600">Thank you! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
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
                    <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20 hover:scale-[1.02]"
                  >
                    Send Message ✨
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Find Us Here</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-stone-600 mb-2">123 Coffee Lane, Koregaon Park</p>
            <p className="text-stone-600 mb-4">Pune, Maharashtra 411001</p>
            <p className="text-sm text-stone-500">
              Located near the Oxford Garden, just a 5-minute walk from the main road.
              Free parking available for customers!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
