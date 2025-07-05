import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VehicleCard from '@/components/VehicleCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Fleet = () => {
  const vehicles = [
    {
      name: "Swift Dzire",
      image: "/swift.jpeg",
      capacity: "4 passengers",
      features: ["Air Conditioned", "Fuel Efficient", "Professional Driver", "Comfortable Seating"]
    },
    {
      name: "Maruti Ertiga",
      image: "https://carbazaar99.com/wp-content/uploads/2024/08/20240806_003502_0000.png",
      capacity: "7 passengers",
      features: ["Air Conditioned", "Spacious Interior", "Family Friendly", "Luggage Space"]
    },
    {
      name: "Innova Crysta",
      image: "/inova.jpeg",
      capacity: "7 passengers",
      features: ["Premium Interior", "Spacious Cabin", "Long Distance Travel", "Ample Luggage Space"]
    },
    {
      name: "Mahindra Scorpio",
      image: "https://media.zigcdn.com/media/content/2023/Feb/63ef318f9f1f2.jpg?tr=w-420",
      capacity: "7 passengers",
      features: ["Rugged & Reliable", "All-Terrain Capability", "Air Conditioned", "Comfortable Ride"]
    },
    {
      name: "Mahindra XUV 500",
      image: "https://img.autocarindia.com/ExtraImages/20200828024151_XUV500.jpg",
      capacity: "7 passengers",
      features: ["Luxury Interior", "Powerful Engine", "Spacious Cabin", "Advanced Features"]
    },
    {
      name: "Mahindra XUV 700",
      image: "https://grouplandmark.in/media/1722249763469-xuv700xuv700leftfrontthreequarter.jpg",
      capacity: "7 passengers",
      features: ["Premium Comfort", "Advanced Technology", "Powerful Performance", "Spacious Interior"]
    },
    {
      name: "Hyundai Xcent",
      image: "https://images.drivespark.com/fit-in/600x338/img/2018/08/hyundai-xcent-front-style-1535176439.jpg",
      capacity: "4 passengers",
      features: ["Fuel Efficient", "Comfortable Sedan", "Air Conditioned", "City Friendly"]
    },
    {
      name: "Audi",
      image: "https://blog.gaadikey.com/wp-content/uploads/2022/03/Audi-Q5-Price-Increase-Across-Audi-models-750x375.jpg",
      capacity: "4 passengers",
      features: ["Luxury Experience", "Premium Interior", "Professional Driver", "Executive Travel"]
    },
    {
      name: "BMW",
      image: "https://www.bmw-special-sales.com/content/dam/bmw/marketBMWCOM/bmw-special-sales_com/common/protection/7-protection/bmw-css-7-series-protection-ms-new-standard.jpg",
      capacity: "4 passengers",
      features: ["Luxury Sedan", "Premium Features", "Business Class Travel", "Professional Driver"]
    },
    {
      name: "Mercedes",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      capacity: "4 passengers",
      features: ["Luxury Experience", "Premium Interior", "Executive Travel", "Professional Driver"]
    },
    {
      name: "AC Traveller",
      image: "https://www.ecorentacar.com/wp-content/uploads/2024/03/tempo.webp",
      capacity: "12-17 passengers",
      features: ["Group Travel", "Air Conditioned", "Spacious Seating", "Ample Luggage Space"]
    },
    {
      name: "Bus",
      image: "https://www.volvobuses.com/content/dam/volvo-buses/markets/global/classic/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg",
      capacity: "30-45 passengers",
      features: ["Large Group Travel", "Air Conditioned", "Comfortable Seating", "Long Distance Travel"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-travel-900 to-travel-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Fleet</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Choose from our extensive fleet of well-maintained vehicles to suit your travel needs.
                From economy cars to luxury vehicles, we have it all.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => (
                <VehicleCard
                  key={index}
                  name={vehicle.name}
                  image={vehicle.image}
                  capacity={vehicle.capacity}
                  features={vehicle.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Fleet Information</h2>

              <div className="premium-card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-travel-800">Our Fleet Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-accent-600 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong className="text-travel-800">Well-maintained vehicles:</strong> All our vehicles undergo regular maintenance and cleaning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-accent-600 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong className="text-travel-800">Professional drivers:</strong> Our drivers are experienced, courteous, and know the regions well.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-accent-600 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong className="text-travel-800">24/7 availability:</strong> Book our vehicles any time, any day, including holidays.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-accent-600 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      <strong className="text-travel-800">Flexible rental options:</strong> From hourly to monthly rentals, we offer flexible options.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="premium-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-travel-800">Booking Information</h3>
                <p className="text-gray-700 mb-4">
                  To book any of our vehicles, you can use our online booking form, call us directly, or visit our office.
                  All bookings are confirmed subject to availability.
                </p>
                <p className="text-gray-700 mb-4">
                  For long-term rentals or special requirements, please contact us directly to discuss your needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Link
                    to="/book-now"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-md font-medium bg-gradient-to-r from-travel-800 to-accent-600 text-white hover:from-travel-900 hover:to-accent-700 transition-all duration-300"
                  >
                    Book a Vehicle
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-md font-medium bg-gray-200 hover:bg-gray-300 text-gray-800 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
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

export default Fleet;