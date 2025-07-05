import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const touristPlaces = [
  {
    name: "Kaziranga National Park",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A UNESCO World Heritage Site, home to the one-horned rhinoceros and rich wildlife.",
  },
  {
    name: "Tawang Monastery",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    description: "The largest monastery in India, nestled in the scenic mountains of Arunachal Pradesh.",
  },
  {
    name: "Cherrapunji",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    description: "Known for its living root bridges and being one of the wettest places on earth.",
  },
  {
    name: "Loktak Lake",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "The largest freshwater lake in Northeast India, famous for its phumdis (floating islands).",
  },
  {
    name: "Ziro Valley",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    description: "A picturesque valley known for its pine hills, rice fields, and the Ziro Music Festival.",
  },
  {
    name: "Majuli Island",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "The world's largest river island, rich in culture and natural beauty.",
  },
  {
    name: "Nohkalikai Falls",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80",
    description: "India's tallest plunge waterfall, located in the lush hills of Meghalaya.",
  },
  {
    name: "Umiam Lake",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    description: "A serene man-made reservoir surrounded by scenic hills, perfect for water sports.",
  },
  {
    name: "Dzukou Valley",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A breathtaking valley on the border of Nagaland and Manipur, famous for its seasonal flowers.",
  },
];

const Services = () => {
  // Price list data 
  const priceList = {
    "KAMAKHYA TEMPLE": { days: 1, actualPrice: 3500.00, discountPrice: 3000.00 },
    "KAZIRANGA": { days: 3, actualPrice: 13500.00, discountPrice: 12000.00 },
    "MANAS": { days: 3, actualPrice: 11500.00, discountPrice: 10500.00 },
    "TAWANG": { days: 5, actualPrice: 25000.00, discountPrice: 22000.00 },
    "CHERRAPUNJI": { days: 3, actualPrice: 13500.00, discountPrice: 11499.00 },
    "LOKTAK LAKE": { days: 5, actualPrice: 36450.00, discountPrice: 34450.00 },
    "ZIRO VALLEY": { days: 5, actualPrice: 25000.00, discountPrice: 22000.00 },
    "MAJULI": { days: 3, actualPrice: 14999.00, discountPrice: 13499.00 },
    "NOHKALIKAI FALLS": { days: 3, actualPrice: 13500.00, discountPrice: 11499.00 },
    "UMIAM LAKE": { days: 3, actualPrice: 13580.00, discountPrice: 11480.00 },
    "DZUKOU VALLEY": { days: 3, actualPrice: 18530.00, discountPrice: 16600.00 },
    "ARUNACHAL": { days: 5, actualPrice: 25320.00, discountPrice: 22220.00 },
    "SHIIONG": { days: 3, actualPrice: 13430.00, discountPrice: 11430.00 },
    "DAWKI": { days: 3, actualPrice: 13300.00, discountPrice: 11320.00 },
    "DARJEELING": { days: 5, actualPrice: 32400.00, discountPrice: 29110.00 },
    "GANGTOK": { days: 9, actualPrice: 36450.00, discountPrice: 34450.00 },
    "SIKIM": { days: 9, actualPrice: 36450.00, discountPrice: 34450.00 },
    "AIRPORT PICK UP": { days: 1, actualPrice: 1200.00, discountPrice: 1200.00 },
    "AIRPORT DROP": { days: 1, actualPrice: 1000.00, discountPrice: 1000.00 },
    "GUWAHATI LOCAL": { days: 1, actualPrice: 3500.00, discountPrice: 3000.00 },
    "OUT SIDE GUWAHATI(UPTO 100 KM)": { days: 1, actualPrice: 3500.00, discountPrice: 3000.00 },
    "OUT SIDE GUWAHATI AFTER 100KM": { days: 1, actualPrice: "PER KM 18.00", discountPrice: "PER KM 15.00" },
    "PART TIME DRIVER": { days: 1, actualPrice: 2500.00, discountPrice: 2000.00 },
  };

  const servicesList = [
    {
      id: "private-tours",
      title: "Private Tours",
      description: "Experience personalized travel with our private tour services. Our expert guides will take you to the best destinations based on your interests.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      features: [
        "Customized itineraries",
        "Professional local guides",
        "Comfortable transportation",
        "Flexible scheduling",
      ],
    },
    {
      id: "city-tours",
      title: "City Tours",
      description: "Discover the beauty and culture of urban destinations with our guided city tours. Perfect for short stays and business travelers.",
      image: "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      features: [
        "Historical landmarks",
        "Cultural attractions",
        "Local cuisine experiences",
        "Half-day and full-day options",
      ],
    },
    {
      id: "sightseeing-tours",
      title: "Sightseeing Tours",
      description: "Experience the most scenic and popular attractions with our comprehensive sightseeing tours of Northeast India.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Major tourist attractions",
        "Photography opportunities",
        "Knowledgeable guides",
        "Comfortable transportation",
      ],
    },
    {
      id: "hotel-booking",
      title: "Hotel Booking",
      description: "Find the perfect accommodation for your stay with our hotel booking service. We partner with the best hotels across Northeast India.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Best available rates",
        "Wide range of options",
        "Quick confirmation",
        "Special requests handling",
      ],
    },
    {
      id: "holiday-package",
      title: "Holiday Packages",
      description: "Enjoy hassle-free vacations with our all-inclusive holiday packages designed for families, couples, and solo travelers.",
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2007&q=80",
      features: [
        "All-inclusive options",
        "Multi-destination tours",
        "Curated experiences",
        "Accommodation and meals",
      ],
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup & Drop",
      description: "Start and end your journey smoothly with our reliable airport transfer services available 24/7.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
      features: [
        "24/7 availability",
        "Flight tracking",
        "Meet and greet service",
        "Professional drivers",
      ],
    },
    {
      id: "car-rental",
      title: "Car Rental Services",
      description: "Explore at your own pace with our car rental services. Choose from a wide range of well-maintained vehicles.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Diverse fleet options",
        "Chauffeur-driven cars",
        "Long-term rental options",
        "Transparent pricing",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Services",
      description: "Specialized transportation and travel solutions for businesses and corporate clients.",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      features: [
        "Airport transfers for executives",
        "Event transportation",
        "Business travel arrangements",
        "Corporate billing options",
      ],
    },
    {
      id: "ticket-booking",
      title: "Flight & Train Ticket Booking",
      description: "Hassle-free booking of flight and train tickets for domestic and international travel.",
      image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      features: [
        "Competitive fares",
        "Multiple airline options",
        "Group booking assistance",
        "E-ticket delivery",
      ],
    },
  ];

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

  useEffect(() => {
    if (window.location.hash === '#tourist-places') {
      const el = document.getElementById('tourist-places');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-travel-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Explore our comprehensive range of travel services designed to make your journey comfortable,
                enjoyable, and memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service) => (
                <Card key={service.id} id={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
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
                            className="mr-2 text-travel-600 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Famous Tourist Places Section */}
        <section id="tourist-places" className="py-16 bg-gradient-to-b from-[#fffbe6] to-[#f8fafc]">
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

        {/* Transportation Services Section - NEW SECTION */}
        <section id="transportation-services" className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#fffbe6]">
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
                const discount = pricing && typeof pricing.actualPrice === 'number' && typeof pricing.discountPrice === 'number'
                  ? Math.round(((pricing.actualPrice - pricing.discountPrice) / pricing.actualPrice) * 100)
                  : 0;

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
                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
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

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today to book any of our services or customize a package according to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                  <Link to="/book-now">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
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

export default Services;
