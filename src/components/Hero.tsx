import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1569971081444-48f2312b5346?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
          aria-label="Scenic view of North East India landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/50" />
      </div>

      <div className="container relative z-10 flex flex-col items-start pt-24 pb-32 md:min-h-[600px] justify-center">
        <div className="max-w-2xl space-y-5 animate-fade-in">
          <div className="mb-6">
            <img
              src="/LOGO_.png"
              alt="SHREEJII Tours & Travels - India's Leading Travel Agency"
              className="h-[120px] md:h-[180px] w-auto"
            />
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Explore Assam with Premium Travel Services
            {/* India's Premier Travel Agency */}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Your one-stop solution for all travel needs across India and worldwide. Explore the best destinations with our premium tour packages, flight bookings, hotel reservations, and luxury car rentals.
          </p>

          {/* <div className="flex flex-wrap gap-3 mt-2">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm">Kashmir Tour Packages</span>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm">Kerala Backwaters</span>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm">Rajasthan Heritage</span>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm">Goa Beaches</span>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm">Northeast Expeditions</span>
          </div> */}

          {/* <div className="mt-4 bg-black/30 p-3 rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-2">Complete Travel Services Nationwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-200">
              <div className="space-y-1">
                <h3 className="font-semibold text-white">Tour Packages</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Luxury Tours
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Adventure Packages
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pilgrimage Tours
                  </li>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-white">Transport</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flight Bookings
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Luxury Car Rentals
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Group Transfers
                  </li>
                </ul>
              </div>

              <div className="space-y-1 col-span-2 md:col-span-1">
                <h3 className="font-semibold text-white">Accommodations</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Luxury Hotels
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Resort Bookings
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Homestays
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="flex flex-wrap gap-4 pt-5">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
              <Link to="/book-now">Book Your Trip</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white/20 text-white">
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          {/* <div className="mt-4 text-sm text-gray-300 flex items-center gap-4 flex-wrap">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Best Price Guarantee
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              24/7 Customer Support
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Customized Itineraries
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Flexible Payment Options
            </span>
          </div>

          <div className="text-xs text-gray-400 mt-2">
            Serving all destinations across India: North, South, East, West, and Northeast regions. International tour packages also available.
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
