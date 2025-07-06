import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F1EFEC] text-[#232323] pt-12 pb-6 border-t border-[#e0dbd3] shadow-inner">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-[#232323] tracking-wide">SHREEJII</h3>
            <p className="text-[#4B4B4B] mb-4">
              Premium travel services in Guwahati. Your comfort and safety are our top priorities.
            </p>
            <div className="space-y-2">
              <p className="text-[#4B4B4B] text-sm flex items-start">
                <span className="font-semibold mr-2">Address:</span>
                <span> sdjasbjbasj skds;kd </span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#232323]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Our Fleet</Link></li>
              <li><Link to="/drivers" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Our Drivers</Link></li>
              <li><Link to="/about" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#232323]">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#private-tours" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Private Tours</Link></li>
              <li><Link to="/services#hotel-booking" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Hotel Booking</Link></li>
              <li><Link to="/services#car-rental" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Car Rental Services</Link></li>
              <li><Link to="/services#airport-pickup" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Airport Pickup & Drop</Link></li>
              <li><Link to="/services#ticket-booking" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Ticket Booking</Link></li>
              <li><Link to="/services#Part-time-Driver Service" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Part-time Driver Service</Link></li>
              <li><Link to="/services#Air-Ticket-Booking" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Air Ticket Booking</Link></li>
              <li><Link to="/services#Train-Ticket-Booking" className="text-[#4B4B4B] hover:text-[#f57c00] transition-colors">Train Ticket Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#232323]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-[#4B4B4B]">
                <span className="font-semibold mr-2">Phone:</span>
                <div className="flex flex-col">

                  <a href="tel:+916901262527" className="hover:text-[#f57c00] transition-colors">+91 6901262527</a>
                  <a href="tel:+917099114226" className="hover:text-[#f57c00] transition-colors">+91 7099114226</a>
                  <a href="tel:+917099114426" className="hover:text-[#f57c00] transition-colors">+91 7099114426</a>
                  <a href="tel:+917099119389" className="hover:text-[#f57c00] transition-colors">+91 7099119389</a>
                  <a href="tel:+919101807090" className="hover:text-[#f57c00] transition-colors">+91 9101807090</a>
                </div>
              </li>
              <li className="flex items-center text-[#4B4B4B]">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:info@shreejiitourstravels.com" className="hover:text-[#f57c00] transition-colors">
                  info@shreejiitourstravels.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e0dbd3] mt-8 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#7a736b]">© {new Date().getFullYear()} SHREEJII Tours & Travels. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#f57c00] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#f57c00] transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center text-xs text-[#7a736b]">
          <span>
            Made with <span className="inline-block text-red-500 text-base align-middle">♥</span> by{' '}
            <a href="https://rh-dynamics.software" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] font-semibold hover:underline">RH Dynamics</a>
            {' '}| Design & Development
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
