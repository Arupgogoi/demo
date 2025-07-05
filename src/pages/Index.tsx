import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import VehicleCard from '@/components/VehicleCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { priceList } from '@/config/prices';

const Index = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlace(null);
  };

  // Function to get price for a place
  const getPriceForPlace = (placeName) => {
    // Special handling for misspelled destinations
    if (placeName.toUpperCase() === "SHILLONG") {
      return priceList["SHIIONG"];
    }
    if (placeName.toUpperCase() === "SIKKIM") {
      return priceList["SIKIM"];
    }

    // Map place names to price list keys
    const priceKey = Object.keys(priceList).find(key =>
      placeName.toUpperCase().includes(key) || key.includes(placeName.toUpperCase())
    );

    return priceKey ? priceList[priceKey] : null;
  };

  const services = [
    {
      title: "Private Tours",
      description: "Personalized tours with experienced guides, tailored to your interests and schedule.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" y1="12" x2="18" y2="12"></line>
          <line x1="6" y1="12" x2="2" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="2"></line>
          <line x1="12" y1="22" x2="12" y2="18"></line>
        </svg>
      ),
      link: "/services#private-tours"
    },
    {
      title: "Car Rental Services",
      description: "Wide range of vehicles from economy cars to luxury SUVs with professional drivers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="14" width="22" height="7" rx="2"></rect>
          <circle cx="6" cy="21" r="1"></circle>
          <circle cx="18" cy="21" r="1"></circle>
          <path d="M4 14.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.5"></path>
        </svg>
      ),
      link: "/services#car-rental"
    },
    {
      title: "Airport Pickup & Drop",
      description: "Reliable airport transportation services with tracking and wait time included.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      link: "/services#airport-pickup"
    },
    {
      title: "Hotel Booking",
      description: "Get the best rates on hotels across Northeast India with our booking service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4v16h18V4H3z"></path>
          <path d="M12 8v8"></path>
          <path d="M8 8v8"></path>
          <path d="M16 8v8"></path>
          <path d="M3 12h18"></path>
        </svg>
      ),
      link: "/services#hotel-booking"
    }
  ];

  const featuredVehicles = [
    {
      name: "Swift Dzire",
      image: "/swift.jpeg",
      capacity: "4 passengers",
      features: ["Air Conditioned", "Fuel Efficient", "Professional Driver", "Comfortable Seating"]
    },
    {
      name: "Innova Crysta",
      image: "/inova.jpeg",
      capacity: "7 passengers",
      features: ["Air Conditioned", "Spacious Interior", "Long Distance Travel", "Luggage Space"]
    },
    {
      name: "Mercedes",
      image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      capacity: "4 passengers",
      features: ["Premium Interior", "Luxury Experience", "Professional Driver", "Business Travel"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Services Section */}
        <section className="container section-padding">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SHREEJII Tours & Travels offers a wide range of premium travel services
              to make your journey comfortable, safe, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </section>

        {/* Famous Tourist Places Section */}
        <section className="py-16 bg-gradient-to-b from-[#fffbe6] to-[#f8fafc]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-[#1a237e]">Famous Tourist Places of North East India</h2>
              <div className="mx-auto w-24 h-1 bg-[#f7b731] rounded-full mb-4" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the most iconic and breathtaking destinations in North East India, handpicked for unforgettable experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kamakhya Temple",
                  image: "https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1726741392778",
                  description: "A significant Hindu temple dedicated to Goddess Kamakhya, known for its tantric worship and architecture.",
                  link: "https://en.wikipedia.org/wiki/Kamakhya_Temple"
                },
                {
                  name: "Kaziranga National Park",
                  image: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2024/09/DSC_0758.jpg?resize=648%2C415&ssl=1",
                  description: "A UNESCO World Heritage Site, home to the one-horned rhinoceros and rich wildlife.",
                  link: "https://en.wikipedia.org/wiki/Kaziranga_National_Park"
                },
                {
                  name: "Manas National Park",
                  image: "https://currylines.com/wp-content/uploads/2018/12/IMG_20181211_104401-1024x576.jpg",
                  description: "A UNESCO World Heritage Site with amazing biodiversity, home to rare and endangered wildlife species.",
                  link: "https://en.wikipedia.org/wiki/Manas_National_Park"
                },
                {
                  name: "Tawang Monastery",
                  image: "https://travelogyindia.b-cdn.net/storage/app/upload/tawang-monastery-arunachal-pradesh.jpg",
                  description: "The largest monastery in India, nestled in the scenic mountains of Arunachal Pradesh.",
                  link: "https://en.wikipedia.org/wiki/Tawang_Monastery"
                },
                {
                  name: "Cherrapunji",
                  image: "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Best_Time_to_Visit_Cherrapunji_e157f9b879.jpg",
                  description: "Known for its living root bridges and being one of the wettest places on earth.",
                  link: "https://en.wikipedia.org/wiki/Cherrapunji"
                },
                {
                  name: "Loktak Lake",
                  image: "https://pulitzercenter.org/sites/default/files/styles/height_500/public/12-14-17/essay_2_of_12.jpg.webp?itok=Z8l80gET",
                  description: "The largest freshwater lake in Northeast India, famous for its phumdis (floating islands).",
                  link: "https://en.wikipedia.org/wiki/Loktak_Lake"
                },
                {
                  name: "Ziro Valley",
                  image: "https://nenow.in/wp-content/uploads/2018/04/Ziro-Valley-in-Arunachal-Pradesh.jpg",
                  description: "A picturesque valley known for its pine hills, rice fields, and the Ziro Music Festival.",
                  link: "https://en.wikipedia.org/wiki/Ziro_Valley"
                },
                {
                  name: "Majuli Island",
                  image: "https://www.indiantempletour.com/wp-content/uploads/2023/04/Majuli-Island.webp",
                  description: "The world's largest river island, rich in culture and natural beauty.",
                  link: "https://en.wikipedia.org/wiki/Majuli"
                },
                {
                  name: "Nohkalikai Falls",
                  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/88/e4/8f/noh-ka-likai-falls.jpg?w=1200&h=-1&s=1",
                  description: "India's tallest plunge waterfall, located in the lush hills of Meghalaya.",
                  link: "https://en.wikipedia.org/wiki/Nohkalikai_Falls"
                },
                {
                  name: "Umiam Lake",
                  image: "https://www.holidify.com/images/cmsuploads/compressed/33809684396_c56b342fcb_b_20170609174547.jpg",
                  description: "A serene man-made reservoir surrounded by scenic hills, perfect for water sports.",
                  link: "https://en.wikipedia.org/wiki/Umiam_Lake"
                },
                {
                  name: "Dzukou Valley",
                  image: "https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-attr-hero-1?qlt=82&ts=1727012411648",
                  description: "A breathtaking valley on the border of Nagaland and Manipur, famous for its seasonal flowers.",
                  link: "https://en.wikipedia.org/wiki/Dzukou_Valley"
                },
                {
                  name: "Arunachal Pradesh",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sela_Pass_.jpg/1920px-Sela_Pass_.jpg",
                  description: "The Land of Dawn-Lit Mountains, offering spectacular landscapes and rich tribal culture.",
                  link: "https://en.wikipedia.org/wiki/Arunachal_Pradesh"
                },
                {
                  name: "Shillong",
                  image: "https://www.india.com/wp-content/uploads/2025/02/Shillong-peak-2.jpg",
                  description: "Known as the Scotland of the East for its rolling hills, waterfalls, and vibrant music scene.",
                  link: "https://en.wikipedia.org/wiki/Shillong"
                },
                {
                  name: "Dawki",
                  image: "https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o.jpg",
                  description: "Famous for its crystal-clear Umngot River and as a border town between India and Bangladesh.",
                  link: "https://en.wikipedia.org/wiki/Dawki"
                },
                {
                  name: "Darjeeling",
                  image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Darjeeling-Travel-Guide-Cover-Photo-840x425.jpg",
                  description: "The Queen of the Hills famous for its tea plantations and spectacular views of Kanchenjunga.",
                  link: "https://en.wikipedia.org/wiki/Darjeeling"
                },
                {
                  name: "Gangtok",
                  image: "https://www.sikkimtrip.com/images/packages/1559658811Ropeway%20in%20Gangtok.jpg",
                  description: "The capital city of Sikkim, offering breathtaking views of the Himalayas and Buddhist monasteries.",
                  link: "https://en.wikipedia.org/wiki/Gangtok"
                },
                {
                  name: "Sikkim",
                  image: "https://t4.ftcdn.net/jpg/04/78/15/73/360_F_478157361_sv6nAECdFo4cqVvvfBLWrqmnSjNPHe30.jpg",
                  description: "A Himalayan state known for its monasteries, alpine meadows, and adventure tourism opportunities.",
                  link: "https://en.wikipedia.org/wiki/Sikkim"
                }
              ].map((place, idx) => {
                const pricing = getPriceForPlace(place.name);
                const discount = pricing ? Math.round(((pricing.actualPrice - pricing.discountPrice) / pricing.actualPrice) * 100) : 0;

                return (
                  <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="relative">
                      <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
                      {pricing && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-red-600 text-white font-bold px-3 py-1">
                            {pricing.days} {pricing.days > 1 ? 'Days' : 'Day'}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-[#1a237e]">{place.name}</h3>
                        {discount > 0 && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                            Save {discount}%
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 flex-grow">{place.description}</p>

                      {pricing && (
                        <div className="mb-4 mt-2 bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Regular Price</p>
                              <p className="text-gray-500 line-through">₹{typeof pricing.actualPrice === 'string' ? pricing.actualPrice : pricing.actualPrice.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500 mb-1">Special Offer</p>
                              <p className="text-[#1a237e] font-bold text-lg">₹{typeof pricing.discountPrice === 'string' ? pricing.discountPrice : pricing.discountPrice.toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <button onClick={() => openModal(place)} className="inline-flex items-center text-[#f7b731] font-semibold hover:underline">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>

                        <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                          <Link to="/book-now">Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Modal for place details */}
          {showModal && selectedPlace && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
                <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                <img src={selectedPlace.image} alt={selectedPlace.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#1a237e]">{selectedPlace.name}</h3>
                <p className="text-gray-700 mb-4">{selectedPlace.description}</p>

                {getPriceForPlace(selectedPlace.name) && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Tour Package Details</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{getPriceForPlace(selectedPlace.name).days} {getPriceForPlace(selectedPlace.name).days > 1 ? 'Days' : 'Day'}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Regular Price:</span>
                        <span className="line-through">₹{typeof getPriceForPlace(selectedPlace.name).actualPrice === 'string' ? getPriceForPlace(selectedPlace.name).actualPrice : getPriceForPlace(selectedPlace.name).actualPrice.toLocaleString('en-IN')}</span>
                      </li>
                      <li className="flex justify-between text-[#1a237e]">
                        <span className="font-bold">Special Offer:</span>
                        <span className="font-bold">₹{typeof getPriceForPlace(selectedPlace.name).discountPrice === 'string' ? getPriceForPlace(selectedPlace.name).discountPrice : getPriceForPlace(selectedPlace.name).discountPrice.toLocaleString('en-IN')}</span>
                      </li>
                    </ul>
                  </div>
                )}

                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Link to="/book-now">Book This Tour</Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Transportation Services Section */}
        <section className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#fffbe6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-[#1a237e]">Transportation & Local Services</h2>
              <div className="mx-auto w-24 h-1 bg-[#f7b731] rounded-full mb-4" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Convenient transportation options and local services to make your travel experience seamless and hassle-free.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Airport Pick Up",
                  image: "https://images.unsplash.com/photo-1732023992801-52aef0995187?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  description: "Convenient airport pickup service with professional drivers who will meet you at the arrival terminal.",
                  priceKey: "AIRPORT PICK UP"
                },
                {
                  name: "Airport Drop",
                  image: "https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                  description: "Reliable airport drop service to ensure you reach the airport on time for your departure.",
                  priceKey: "AIRPORT DROP"
                },
                {
                  name: "Guwahati Local",
                  image: "https://content.r9cdn.net/rimg/dimg/5e/47/b9e9be82-city-52606-173238a2aeb.jpg?width=1366&height=768&xhint=3820&yhint=1030&crop=true",
                  description: "Explore the vibrant city of Guwahati with our local transportation service for a day.",
                  priceKey: "GUWAHATI LOCAL"
                },
                {
                  name: "Outside Guwahati (Upto 100 KM)",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBBVrreP8qmUy4EJtPT8oQbDYRphp-CzmFA&s",
                  description: "Day trips to nearby destinations within 100km of Guwahati with comfortable transportation.",
                  priceKey: "OUT SIDE GUWAHATI(UPTO 100 KM)"
                },
                {
                  name: "Outside Guwahati (Beyond 100 KM)",
                  image: "https://www.savaari.com/blog/wp-content/uploads/2024/02/Guwahati-city1.webp",
                  description: "Long-distance travel beyond 100km of Guwahati with per kilometer pricing for complete flexibility.",
                  priceKey: "OUT SIDE GUWAHATI AFTER 100KM"
                },
                {
                  name: "Part-time Driver Service",
                  image: "https://plus.unsplash.com/premium_photo-1681821679118-bb069eeb2d98?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpdmVyfGVufDB8fDB8fHww",
                  description: "Professional drivers available on hourly basis for all your transportation needs throughout Northeast India.",
                  priceKey: null
                }
              ].map((service, idx) => {
                const pricing = priceList[service.priceKey];
                // Calculate discount percentage, with special handling for per kilometer pricing
                let discount = 0;
                if (service.priceKey === "OUT SIDE GUWAHATI AFTER 100KM") {
                  discount = 17; // Approximately 17% discount for 18.00 to 15.00
                } else if (pricing && typeof pricing.actualPrice === 'number' && typeof pricing.discountPrice === 'number') {
                  discount = Math.round(((pricing.actualPrice - pricing.discountPrice) / pricing.actualPrice) * 100);
                }

                return (
                  <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="relative">
                      <img src={service.image} alt={service.name} className="h-48 w-full object-cover" />
                      {pricing && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-red-600 text-white font-bold px-3 py-1">
                            {pricing.days} {pricing.days > 1 ? 'Days' : 'Day'}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-[#1a237e]">{service.name}</h3>
                        {discount > 0 && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-3 py-0.5 font-semibold text-sm whitespace-nowrap">
                            Save {discount}%
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

                      {pricing && (
                        <div className="mb-4 mt-2 bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Regular Price</p>
                              <p className="text-gray-500 line-through">₹{typeof pricing.actualPrice === 'string' ? pricing.actualPrice : pricing.actualPrice.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500 mb-1">Special Offer</p>
                              <p className="text-[#1a237e] font-bold text-lg">₹{typeof pricing.discountPrice === 'string' ? pricing.discountPrice : pricing.discountPrice.toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white w-full">
                        <Link to="/book-now">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Explore India Section */}
        <section className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#e6e6e6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-[#1a237e]">Explore India</h2>
              <div className="mx-auto w-24 h-1 bg-[#f7b731] rounded-full mb-4" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover more incredible destinations across India, each offering unique experiences and cultural wonders.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Arunachal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sela_Pass_.jpg/1920px-Sela_Pass_.jpg', description: 'A land of dawn-lit mountains and tribal culture.' },
                { name: 'Tawang', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/The_Tawang_Monastery.jpg/1920px-The_Tawang_Monastery.jpg', description: 'Home to the famous Tawang Monastery and scenic beauty.' },
                { name: 'Shillong', image: 'https://www.india.com/wp-content/uploads/2025/02/Shillong-peak-2.jpg', description: 'The Scotland of the East, known for its rolling hills and music.' },
                { name: 'Cherrapunji', image: 'https://cdn.britannica.com/68/252368-050-C456B7A4/Living-root-bridge-tree-Cherrapunji-Meghalaya-India.jpg', description: 'Famous for living root bridges and heavy rainfall.' },
                { name: 'Dawki', image: 'https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o.jpg', description: 'Crystal clear river and Indo-Bangladesh border town.' },
                { name: 'Darjeeling', image: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Darjeeling-Travel-Guide-Cover-Photo-840x425.jpg', description: 'Queen of the Hills, famous for tea gardens and views of Kanchenjunga.' },
                { name: 'Gangtok', image: 'https://www.sikkimtrip.com/images/packages/1559658811Ropeway%20in%20Gangtok.jpg', description: 'The capital of Sikkim, gateway to the Himalayas.' },
                { name: 'Sikim', image: 'https://t4.ftcdn.net/jpg/04/78/15/73/360_F_478157361_sv6nAECdFo4cqVvvfBLWrqmnSjNPHe30.jpg', description: 'A state of monasteries, mountains, and adventure.' },
                { name: 'Manali', image: 'https://www.holidify.com/images/bgImages/MANALI.jpg', description: 'A popular hill station for adventure and nature lovers.' },
                { name: 'Jaipur', image: 'https://lp-cms-production.imgix.net/2024-07/shutterstock2377226191.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800', description: 'The Pink City, known for its palaces and vibrant culture.' },
                { name: 'Goa', image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/04/15151106/palm-beach-1.jpeg?tr=w-1200,q=60', description: 'Famous for beaches, nightlife, and Portuguese heritage.' },
                { name: 'Agra', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg', description: 'Home to the iconic Taj Mahal.' },
                { name: 'Kochi', image: 'https://static.toiimg.com/photo/81695811.cms', description: 'A port city with a blend of colonial and local culture.' },
                { name: 'Kerala', image: 'https://dynamic.tourtravelworld.com/blog_images/12-evergreen-hill-stations-in-kerala-20170724042237.jpg', description: "God's Own Country, known for backwaters and lush greenery." },
                { name: 'Odisha', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1726663559461', description: 'Land of temples, beaches, and tribal culture.' },
                { name: 'Delhi', image: 'https://www.mistay.in/travel-blog/content/images/size/w2000/2020/06/cover-10.jpg', description: 'The capital city, rich in history and modern attractions.' },
                { name: 'Varanasi', image: 'https://i.natgeofe.com/n/3f6f64c6-27cf-47e5-b682-0edc939b95e7/ganga-aarti-varansai-india.jpg', description: 'The spiritual capital of India, on the banks of the Ganges.' },
                { name: 'Rishikesh', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/trayambakeshwar-temple-rishikesh-uttrakhand-1-attr-hero?qlt=82&ts=1726646312895', description: 'Yoga capital of the world, on the banks of the Ganges.' },
                { name: 'Kedarnath', image: 'https://www.chardhamhotel.in/blog/wp-content/uploads/2024/09/Kedarnath-Temple.jpg', description: 'One of the holiest Hindu temples dedicated to Lord Shiva, nestled in the Garhwal Himalayas.' },
              ].map((place, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                  <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-[#1a237e]">{place.name}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{place.description}</p>
                    <a href="/services#tourist-places" className="inline-flex items-center text-[#f7b731] font-semibold hover:underline mt-auto">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-travel-50 section-padding">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="mb-4">Your Trusted Travel Partner in Guwahati</h2>
                <p className="text-gray-600 mb-4">
                  SHREEJII Tours & Travels has been providing exceptional travel services in Guwahati and across
                  Northeast India. We take pride in our fleet of well-maintained vehicles and our team of
                  experienced drivers.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you need a vehicle for business travel, family vacations, or special occasions,
                  we have the perfect solution for you.
                </p>
                <Button asChild variant="outline">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Assam landscape"
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded shadow-lg">
                    <p className="font-bold text-travel-800">100+</p>
                    <p className="text-sm text-gray-600">Professional Drivers</p>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white p-4 rounded shadow-lg">
                    <p className="font-bold text-travel-800">200+</p>
                    <p className="text-sm text-gray-600">Vehicle Types</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="container section-padding">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Fleet</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our wide selection of vehicles ranging from economy cars to luxury options.
              All our vehicles are well-maintained and driven by professional drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                name={vehicle.name}
                image={vehicle.image}
                capacity={vehicle.capacity}
                features={vehicle.features}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/fleet">View All Vehicles</Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-travel-900 text-white section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-white">Ready to Book Your Trip?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to book your vehicle or customize a tour package according to your needs.
                Our team is ready to assist you 24/7.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                  <Link to="/book-now">Book Now</Link>
                </Button>
                <Button asChild size="lg" className="bg-[#f7b731] hover:bg-[#e6a800] text-[#1a237e] font-bold shadow-md">
                  <a href="tel:+917099052244">Call Us</a>
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

export default Index;