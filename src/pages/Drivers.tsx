import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const DriverCard = ({ name, experience, languages, vehicleTypes }: {
  name: string;
  experience: string;
  languages: string[];
  vehicleTypes: string[];
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl border border-transparent hover:border-[#f7b731] transition-all duration-300 flex flex-col items-center p-6">
      <div className="mb-4">
        <div className="w-16 h-16 bg-gradient-to-tr from-[#f7b731] to-[#fffbe6] rounded-full flex items-center justify-center text-2xl font-bold text-[#1a237e] shadow-md">
          <span>{name[0]}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1 text-[#1a237e]">{name}</h3>
      <p className="text-gray-600 mb-4">Experience: <span className="text-[#f7b731] font-semibold">{experience}</span></p>
      <div className="mb-3 w-full">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Languages</h4>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-[#f7b731]/10 text-[#1a237e] text-xs border border-[#f7b731]"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Vehicle Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {vehicleTypes.map((vehicle, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200"
            >
              {vehicle}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Drivers = () => {
  // List of drivers with their details
  const allDrivers = [
    {
      name: "Moinul Khan",
      experience: "8+ years",
      languages: ["English", "Hindi", "Bengali", "Assamese"],
      vehicleTypes: ["Sedan", "SUV"]
    },
    {
      name: "Bulbul Hussain",
      experience: "7+ years",
      languages: ["Hindi", "Assamese", "Bengali"],
      vehicleTypes: ["SUV", "Luxury Cars"]
    },
    {
      name: "Saidul Ali",
      experience: "6+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Traveller", "Bus"]
    },
    {
      name: "Nazimul Khan",
      experience: "9+ years",
      languages: ["English", "Hindi", "Assamese", "Bengali"],
      vehicleTypes: ["Sedan", "SUV", "Luxury Cars"]
    },
    {
      name: "Niren Bhuyan",
      experience: "5+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Sedan", "Hatchback"]
    },
    {
      name: "Rabul Zannat",
      experience: "4+ years",
      languages: ["Hindi", "Assamese"],
      vehicleTypes: ["SUV", "Sedan"]
    },
    {
      name: "Manash Deka",
      experience: "7+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Luxury Cars", "SUV"]
    },
    {
      name: "Shib Ali",
      experience: "6+ years",
      languages: ["Hindi", "Assamese", "Bengali"],
      vehicleTypes: ["SUV", "Traveller"]
    },
    {
      name: "Abdul Kazi",
      experience: "8+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Sedan", "Luxury Cars"]
    },
    {
      name: "Nazimur Haque",
      experience: "5+ years",
      languages: ["Hindi", "Assamese"],
      vehicleTypes: ["SUV", "Sedan"]
    },
    {
      name: "Biren Baishya",
      experience: "7+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["SUV", "Traveller"]
    },
    {
      name: "Diganta Deka",
      experience: "4+ years",
      languages: ["Hindi", "Assamese"],
      vehicleTypes: ["Sedan", "Hatchback"]
    },
    {
      name: "Prasenjit Das",
      experience: "6+ years",
      languages: ["English", "Hindi", "Assamese", "Bengali"],
      vehicleTypes: ["SUV", "Luxury Cars"]
    },
    {
      name: "Dibjyoti Deka",
      experience: "5+ years",
      languages: ["Hindi", "Assamese"],
      vehicleTypes: ["Sedan", "SUV"]
    },
    {
      name: "Haren Bharali",
      experience: "9+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Luxury Cars", "SUV", "Sedan"]
    },
    {
      name: "Bikash Das",
      experience: "7+ years",
      languages: ["Hindi", "Assamese", "Bengali"],
      vehicleTypes: ["Traveller", "Bus"]
    },
    {
      name: "Biren Choudhury",
      experience: "8+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Sedan", "SUV", "Luxury Cars"]
    },
    {
      name: "Debojit Medhi",
      experience: "6+ years",
      languages: ["Hindi", "Assamese"],
      vehicleTypes: ["SUV", "Traveller"]
    },
    {
      name: "Nirmal Haloi",
      experience: "5+ years",
      languages: ["English", "Hindi", "Assamese"],
      vehicleTypes: ["Sedan", "Hatchback"]
    },
    {
      name: "Pulak Baishya",
      experience: "7+ years",
      languages: ["Hindi", "Assamese", "Bengali"],
      vehicleTypes: ["SUV", "Sedan"]
    }
  ];

  // Local drivers to feature first
  const localDriverNames = [
    "Manash Deka", "Niren Bhuyan", "Biren Baishya", "Diganta Deka", "Prasenjit Das", "Dibjyoti Deka", "Haren Bharali", "Bikash Das", "Biren Choudhury", "Debojit Medhi", "Nirmal Haloi", "Pulak Baishya"
  ];

  // Split drivers into featured (local) and the rest
  const featuredDrivers = localDriverNames
    .map(name => allDrivers.find(d => d.name === name))
    .filter(Boolean);
  const restDrivers = allDrivers.filter(d => !localDriverNames.includes(d.name));
  const drivers = [...featuredDrivers, ...restDrivers];

  // More drivers from the provided list
  const morDrivers = [
    "Pinku Deka", "Mintu Das", "Raju Kalita", "Karna Deka", "Jitu Boro",
    "Ratul Deka", "Satyajit Deka", "Moni Deka", "Anowar Hussain", "Mazibur Rahman",
    "Suman Sarma", "Abdul Kadar", "Riju Islam", "Hasmat Ali", "Sapnanil Baishya",
    "Bikash Kalita", "Manoj Kalita", "Dhan Kalita", "Jyoti Medhi", "Prasenjit Bhuyan",
    "Pulin Deka"
  ];
  const morDriverObjects = morDrivers.map(name => ({
    name,
    experience: "3+ years",
    languages: ["Hindi", "Assamese"],
    vehicleTypes: ["Sedan", "SUV"]
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#1a237e] text-white py-20 md:py-32 flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80" alt="Drivers Hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[#1a237e]/80" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Professional Drivers</h1>
            <div className="mx-auto w-24 h-1 bg-[#f7b731] rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-200">
              Meet our team of experienced, courteous, and knowledgeable drivers who will make your journey safe and comfortable.
            </p>
          </div>
        </section>

        {/* Featured Drivers */}
        <section className="py-16 bg-gradient-to-b from-[#fffbe6] to-[#f8fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1a237e]">Featured Drivers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {drivers.map((driver, index) => (
                <DriverCard
                  key={index}
                  name={driver.name}
                  experience={driver.experience}
                  languages={driver.languages}
                  vehicleTypes={driver.vehicleTypes}
                />
              ))}
            </div>
          </div>
        </section>

        {/* More Drivers */}
        <section className="py-12 md:py-16 bg-[#f7f6f2]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1a237e]">Additional Drivers</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-600 mb-6">
                  In addition to our featured drivers, we have many more professional drivers who are part of the SHREEJII
                  team. All our drivers undergo rigorous training and verification processes before joining our team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {morDriverObjects.map((driver, index) => (
                    <DriverCard
                      key={index}
                      name={driver.name}
                      experience={driver.experience}
                      languages={driver.languages}
                      vehicleTypes={driver.vehicleTypes}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Driver Policy */}
        <section className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#fffbe6]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#1a237e]">Our Driver Policy</h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#1a237e]">What Makes Our Drivers Special</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7b731]/20 text-[#f7b731] mr-4 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#1a237e]">Rigorous Screening</h4>
                      <p className="text-gray-600">All our drivers undergo thorough background checks and verification processes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7b731]/20 text-[#f7b731] mr-4 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#1a237e]">Professional Training</h4>
                      <p className="text-gray-600">Regular training in safe driving, customer service, and regional knowledge.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7b731]/20 text-[#f7b731] mr-4 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#1a237e]">Local Expertise</h4>
                      <p className="text-gray-600">Our drivers have extensive knowledge of local routes, attractions, and customs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f7b731]/20 text-[#f7b731] mr-4 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#1a237e]">Customer-Focused</h4>
                      <p className="text-gray-600">Trained to provide excellent customer service with a focus on comfort and satisfaction.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1a237e] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Journey?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Experience the professionalism and expertise of our drivers by booking your next trip with SHREEJII Tours & Travels.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-[#f7b731] hover:bg-[#e6a800] text-[#1a237e] font-bold shadow-md">
                  <Link to="/book-now">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#f7b731] text-[#f7b731] hover:bg-[#f7b731]/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Drivers;
