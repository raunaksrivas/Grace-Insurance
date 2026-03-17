import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: 'Personal', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions? We're here to help you navigate your insurance and financial needs.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-4 rounded-xl mr-6">
                      <Phone className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Call Us</h4>
                      <a href="tel:9724604144" className="text-slate-600 hover:text-secondary transition-colors">(972) 460-4144</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-4 rounded-xl mr-6">
                      <Mail className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Us</h4>
                      <a href="mailto:info@graceinsuranceusa.com" className="text-slate-600 hover:text-secondary transition-colors">info@graceinsuranceusa.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-4 rounded-xl mr-6">
                      <MapPin className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Office Address</h4>
                      <p className="text-slate-600">6246 Broadway Blvd, Suite 100,<br />Garland, TX 75043</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h4 className="font-bold text-primary mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-secondary" />
                  Business Hours
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday:</span> <span>By Appointment</span></li>
                  <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-slate-100">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="text-green-600 w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg">
                      Thank you for reaching out. A member of our team will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-secondary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          placeholder="(555) 000-0000"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">Service Interested In</label>
                        <select 
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          value={formState.service}
                          onChange={(e) => setFormState({...formState, service: e.target.value})}
                        >
                          <option>Personal Insurance</option>
                          <option>Commercial Insurance</option>
                          <option>Wealth & Retirement</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Your Message</label>
                      <textarea 
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl">
          Google Maps Embed Placeholder
        </div>
      </section>
    </div>
  );
}
