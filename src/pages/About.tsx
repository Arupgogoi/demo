import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-travel-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About SHREEJII Tours & Travels</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Your trusted travel partner in Guwahati and Northeast India
              </p>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Story Text */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  SHREEJII Tours & Travels was founded with a vision to redefine travel experiences across India. While our roots began in the vibrant Northeast, we've expanded our reach to proudly serve travelers nationwide — offering a full spectrum of travel services tailored to modern needs.
                  <br /><br />
                  From premium car rentals and personalized tour packages to hotel bookings, flight assistance, and smooth airport transfers, we deliver reliable, end-to-end solutions for individuals, families, and corporate clients alike.
                </p>
                <p className="text-gray-600 mb-6">
                  At the heart of everything we do is our unwavering commitment to client satisfaction. We recognize that every journey is personal and every minute of our clients' time is valuable. That's why we focus on delivering efficient, responsive, and high-quality service — ensuring a hassle-free experience from planning to destination.
                  <br /><br />
                  Whether you're exploring heritage sites in Rajasthan, beaches in Goa, mountains in Himachal, or business hubs across metro cities — SHREEJII Tours & Travels is your trusted travel partner, making every journey memorable.
                </p>
              </div>
              {/* Right: Owner & Founder Cards with Overlap */}
              <div className="relative flex flex-col items-center justify-center h-full">
                {/* Owner Card */}
                <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden w-96 h-[500px] bg-black/80 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45),0_0_32px_4px_rgba(255,215,0,0.25)] group peer">
                  <img src="/lovable-uploads/dada.jpeg" alt="Owner Jit Jyoti Lahkar" className="w-full h-full object-cover object-top flex-1 transition-all duration-300 group-hover:brightness-110 peer-hover:brightness-110 peer-hover:opacity-100 peer-hover:z-20 peer-hover:scale-105 peer-hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45),0_0_32px_4px_rgba(255,215,0,0.25)] peer-focus:brightness-110" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6">
                    <span className="font-bold text-white text-2xl block">Jit Jyoti Lahkar</span>
                    <span className="text-gray-200 text-lg block">Owner</span>
                  </div>
                </div>
                {/* Founder Card (overlapping, shifted even further right to fill the gap) */}
                <div className="absolute left-[28rem] top-16 z-20 rounded-3xl shadow-3xl overflow-hidden w-96 h-[500px] bg-black/80 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45),0_0_32px_4px_rgba(255,215,0,0.25)] group peer hidden lg:flex">
                  <img src="/lovable-uploads/maam.jpeg" alt="Founder Pranamika Haloi Lahkar" className="w-full h-full object-cover object-top flex-1 transition-all duration-300 group-hover:brightness-110 peer-hover:brightness-110 peer-hover:opacity-100 peer-hover:z-20 peer-hover:scale-105 peer-hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45),0_0_32px_4px_rgba(255,215,0,0.25)] peer-focus:brightness-110" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6">
                    <span className="font-bold text-white text-2xl block">Pranamika Haloi Lahkar</span>
                    <span className="text-gray-200 text-lg block">Founder</span>
                  </div>
                </div>
                {/* Fading effect: when one card is hovered, fade the other */}
                <style>{`
                  .peer:hover ~ .peer,
                  .peer:focus ~ .peer {
                    opacity: 0.6;
                    filter: blur(0.5px);
                  }
                  .peer:hover,
                  .peer:focus {
                    opacity: 1 !important;
                    filter: none !important;
                  }
                `}</style>
                {/* Founder Card for mobile (no overlap) */}
                <div className="relative z-20 rounded-3xl shadow-2xl overflow-hidden w-96 h-[500px] bg-black/80 flex flex-col mt-8 lg:hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45),0_0_32px_4px_rgba(255,215,0,0.25)] group peer">
                  <img src="/lovable-uploads/maam.jpeg" alt="Founder Pranamika Haloi Lahkar" className="w-full h-full object-cover object-top flex-1 transition-all duration-300 group-hover:brightness-110 peer-hover:brightness-110 peer-hover:opacity-100 peer-hover:z-20 peer-hover:scale-105 peer-hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45),0_0_32px_4px_rgba(255,215,0,0.25)] peer-focus:brightness-110" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6">
                    <span className="font-bold text-white text-2xl block">Pranamika Haloi Lahkar</span>
                    <span className="text-gray-200 text-lg block">Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Our Values */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At SHREEJII Tours & Travels, our values guide everything we do, from how we interact with our customers
                to the quality of services we provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-100 text-travel-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 6 8-4 8 4"></path>
                    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
                    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
                    <path d="M18 5v17"></path>
                    <path d="M6 5v17"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We prioritize our customers' needs and strive to exceed their expectations with our services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-100 text-travel-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Punctuality & Reliability</h3>
                <p className="text-gray-600">
                  We understand the importance of time in travel. Our services are punctual and reliable, every time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-travel-100 text-travel-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion for Service</h3>
                <p className="text-gray-600">
                  We are passionate about providing exceptional travel experiences that create lasting memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#f7f5f2] to-[#f1efec]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who work tirelessly to ensure your travel experience is smooth and enjoyable.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 gap-6">
              <div className="bg-white/80 rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center w-72 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.18)]">
                <div className="mb-4 relative">
                  <img
                    src="/lovable-uploads/dada.jpeg"
                    alt="Owner Jit Jyoti Lahkar"
                    className="rounded-full w-32 h-32 mx-auto object-cover object-top border-4 border-white shadow"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Jit Jyoti Lahkar</h3>
                <p className="text-gray-500 mb-3">Owner</p>
                <p className="text-gray-600 max-w-xs mx-auto text-center">
                  Visionary leader and owner, ensuring the highest standards in all our services.
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center w-72 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.18)]">
                <div className="mb-4">
                  <img
                    src="/lovable-uploads/maam.jpeg"
                    alt="Founder Pranamika Haloi Lahkar"
                    className="rounded-full w-32 h-32 mx-auto object-cover object-top border-4 border-white shadow"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Pranamika Haloi Lahkar</h3>
                <p className="text-gray-500 mb-3">Founder</p>
                <p className="text-gray-600 max-w-xs mx-auto text-center">
                  Founder and driving force behind SHREEJII, dedicated to customer delight and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-travel-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to book your travel or learn more about our services. Our team is ready to assist you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/book-now" className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md font-medium">
                  Book Now
                </a>
                <a href="/contact" className="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium border border-white">
                  Contact Us
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

export default About;
