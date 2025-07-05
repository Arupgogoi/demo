import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, PhoneCall, Mail, MapPin, Clock, Info } from 'lucide-react';

const BookNow = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Travel Experience</h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                Let us handle your travel arrangements while you focus on creating unforgettable memories.
              </p>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <section className="container py-12 -mt-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#1a237e] mr-3"></div>
                <h2 className="text-2xl font-semibold text-gray-800">Request a Booking</h2>
              </div>

              <p className="text-gray-600 mb-8">
                Complete the form below with your travel details. Our team will review your request and contact you within 24 hours.
              </p>

              <BookingForm />

              <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100 flex items-start">
                <Info className="text-blue-600 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  Your booking request will be confirmed via email. A team member will contact you to finalize details and arrange payment.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#1a237e] mr-3"></div>
                <h2 className="text-2xl font-semibold text-gray-800">Additional Booking Options</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-[#1a237e]/10 p-3 mr-3">
                      <PhoneCall className="h-5 w-5 text-[#1a237e]" />
                    </div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">Speak directly with our booking specialists</p>
                  <div className="space-y-2">

                    <a href="tel:+91 6901262527" className="flex items-center text-gray-700 hover:text-[#1a237e]">
                      <span className="font-medium">+91 6901262527</span>
                    </a>
                    <a href="tel:+91 7099114226" className="flex items-center text-gray-700 hover:text-[#1a237e]">
                      <span className="font-medium">+91 7099114226</span>
                    </a>
                    <a href="tel:+91 7099114426" className="flex items-center text-gray-700 hover:text-[#1a237e]">
                      <span className="font-medium">+91 7099114426</span>
                    </a>
                    <a href="tel:+91 7099119389" className="flex items-center text-gray-700 hover:text-[#1a237e]">
                      <span className="font-medium">+91 7099119389</span>
                    </a>
                    <a href="tel:+91 9101807090" className="flex items-center text-gray-700 hover:text-[#1a237e]">
                      <span className="font-medium">+91 9101807090</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-[#1a237e]/10 p-3 mr-3">
                      <Mail className="h-5 w-5 text-[#1a237e]" />
                    </div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">Send us your requirements for a personalized travel plan</p>
                  <a href="mailto:info@shreejiitourstravels.com" className="flex items-center text-gray-700 hover:text-[#1a237e]">
                    <span className="font-medium">info@shreejiitourstravels.com</span>
                  </a>
                  <p className="text-gray-500 text-sm mt-3">
                    Response time: within 24 hours
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-[#1a237e]/10 p-3 mr-3">
                      <MapPin className="h-5 w-5 text-[#1a237e]" />
                    </div>
                    <h3 className="font-semibold text-lg">Visit Our Office</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">Visit us in person for a consultation</p>
                  <address className="not-italic text-gray-700 font-medium">
                    new 01st Floor, Sharada Dreams modified,<br />
                    Rohit Sarma Path, Hatigaon,<br />
                    Guwahati, 781038
                  </address>
                  <div className="flex items-center mt-3 text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#1a237e] mr-3"></div>
                <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg text-gray-800 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept multiple payment methods including credit/debit cards, UPI, net banking, and cash. A deposit is usually required to confirm bookings.</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg text-gray-800 mb-2">Can I modify my booking after confirmation?</h3>
                  <p className="text-gray-600">Yes, you can modify your booking subject to availability. Please contact us at least 72 hours before your scheduled trip for any changes.</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg text-gray-800 mb-2">What is your cancellation policy?</h3>
                  <p className="text-gray-600">Full refund if cancelled 7 days before the trip. 50% refund if cancelled 3-7 days before. No refund for cancellations less than 3 days before the scheduled trip.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookNow;
