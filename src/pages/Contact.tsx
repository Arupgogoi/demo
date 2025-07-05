import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className="mr-4 text-travel-600">{icon}</div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-travel-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Get in touch with our team for bookings, inquiries, or any assistance you need. We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Contact Information */}
              <div className="flex flex-col justify-center h-full mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600 mb-8 max-w-md">Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
                <div className="flex items-center mb-4 text-accent-500 flex-wrap">
                  <svg className="w-6 h-6 mr-3 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span className="text-base md:text-lg text-gray-800 break-words"> +91 6901262527, +91 7099114226, +91 7099114426, +91 7099119389, +91 9101807090</span>
                </div>
                <div className="flex items-center mb-4 text-accent-500 flex-wrap">
                  <svg className="w-6 h-6 mr-3 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <span className="text-base md:text-lg text-gray-800 break-words">info@shreejiitourstravels.com</span>
                </div>
                <div className="flex items-center mb-4 text-accent-500 flex-wrap">
                  <svg className="w-6 h-6 mr-3 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span className="text-base md:text-lg text-gray-800 break-words">new 01st Floor, Sharada Dreams modified, Rohit Sarma Path, Opp Muscle Mania Gym, Near Imperial Vista, Lakhimi Nagar, Hatigaon, Guwahati, 781038</span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex flex-col justify-center h-full">
                <form className="space-y-6 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input id="firstName" name="firstName" type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" placeholder="First" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input id="lastName" name="lastName" type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" placeholder="Last" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input id="email" name="email" type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" placeholder="xxx-xxx-xxxx" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" placeholder="Type your message ..."></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto px-8 py-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-all duration-300 shadow-md mx-auto block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
              <p className="text-gray-600 mb-8">
                Follow us on social media for updates, travel tips, and special offers.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/share/1AT9Wnrh66/"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 hover:shadow-[0_4px_24px_0_rgba(247,183,49,0.18)] flex items-center justify-center text-travel-600 hover:text-accent-600 transition-all duration-300 border border-gray-200"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/shreejii_travel15?utm_source=qr&igsh=OWdxaHpwb2xwc3Nl"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 hover:shadow-[0_4px_24px_0_rgba(247,183,49,0.18)] flex items-center justify-center text-travel-600 hover:text-accent-600 transition-all duration-300 border border-gray-200"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 hover:shadow-[0_4px_24px_0_rgba(247,183,49,0.18)] flex items-center justify-center text-travel-600 hover:text-accent-600 transition-all duration-300 border border-gray-200"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 hover:shadow-[0_4px_24px_0_rgba(247,183,49,0.18)] flex items-center justify-center text-travel-600 hover:text-accent-600 transition-all duration-300 border border-gray-200"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
