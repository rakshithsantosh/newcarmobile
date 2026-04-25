export const SITE_CONFIG = {
  name: "New Car Mobile",
  shortName: "NCM",
  address: "#2/2, 3rd Floor, Church Road, Madhava Rao Circle, Basavanagudi, Bengaluru-560004",
  email: "newcarmobile@gmail.com",
  phones: [
    { name: "Office", number: "080-26577886" },
    { name: "Enquiry", number: "080-61914161" },
    { name: "Govindraj", number: "+91 98450 31627" },
    { name: "Kashi", number: "+91 98458 31627" },
    { name: "Ramu", number: "+91 99809 18157" }
  ],
  stats: [
    { label: "Successful Trips", value: "3.6M+" },
    { label: "Happy Customers", value: "1.8M+" },
    { label: "Corporate Clients", value: "300+" },
    { label: "Kilometers Covered", value: "90M+" }
  ]
};

export const SERVICES = [
  {
    id: "corporate-cab",
    title: "Corporate Cab",
    tagline: "Premium transportation solutions for your business needs.",
    description: "Reliable, punctual, and professional corporate cab services in Bangalore. We cater to executive travel, client pick-ups, and airport transfers with a focus on comfort and style.",
    benefits: ["24/7 Availability", "Professional Chauffeurs", "GPS Tracked Vehicles", "Corporate Billing"],
    image: "/images/services/corporate.jpg"
  },
  {
    id: "employee-transportation",
    title: "Employee Transportation",
    tagline: "Safe and reliable daily commutes for your workforce.",
    description: "Efficient fleet management for employee pick-up and drop-off. We ensure timely arrivals and departures with high-capacity vehicles optimized for safety.",
    benefits: ["Real-time Tracking", "Punctual Service", "Panic Button Enabled", "Route Optimization"],
    image: "/images/services/employee.jpg"
  },
  {
    id: "self-drive-cars",
    title: "Self-Drive Cars",
    tagline: "Liberty to drive your way with our premium self-drive fleet.",
    description: "Range of well-maintained premium cars for self-drive. Perfect for weekend getaways or personal business trips without the need for a chauffeur.",
    benefits: ["Wide Range of Cars", "Clean & Maintained", "Easy Booking Process", "Flexible Pricing"],
    image: "/images/services/self-drive.jpg"
  },
  {
    id: "premium-cabs",
    title: "Premium Cabs",
    tagline: "Luxury travel experience for your special occasions.",
    description: "Experience the pinnacle of luxury with our high-end fleet including Mercedes, BMW, and Audi. Ideal for weddings, VIP guests, and high-profile events.",
    benefits: ["Luxury Brands", "Exemplary Service", "Well-Dressed Chauffeurs", "Complimentary Amenities"],
    image: "/images/services/premium.jpg"
  },
  {
    id: "tourist-transportation",
    title: "Tourist Transportation",
    tagline: "Explore Incredible India with our comfortable tourist fleet.",
    description: "Explore Bangalore and surrounding tourist destinations with our spacious and comfortable tourist vehicles. Knowledgeable drivers and customizable itineraries.",
    benefits: ["Custom Itineraries", "Knowledgeable Drivers", "Spacious Vehicles", "Transparent Pricing"],
    image: "/images/services/tourist.jpg"
  }
];

export const FLEET_CATEGORIES = [
  { id: "premium", title: "Premium Cabs" },
  { id: "corporate", title: "Corporate Cabs" },
  { id: "employee", title: "Employee Transportation" },
  { id: "tourist", title: "Tourist Transport" }
];

export const FLEET = [
  {
    id: "mercedes-e-class",
    category: "premium",
    name: "Mercedes E-Class",
    specs: { pax: 4, luggage: 3, engine: "2.0L Turbo" },
    image: "/images/fleet/mercedes-e.jpg",
    description: "The definition of luxury and comfort for executive travel."
  },
  {
    id: "bmw-5-series",
    category: "premium",
    name: "BMW 5 Series",
    specs: { pax: 4, luggage: 2, engine: "2.0L TwinPower" },
    image: "/images/fleet/bmw-5.jpg"
  },
  {
    id: "audi-a6",
    category: "premium",
    name: "Audi A6",
    specs: { pax: 4, luggage: 3, engine: "2.0L TFSI" },
    image: "/images/fleet/audi-a6.jpg"
  },
  {
    id: "toyota-innova-hycross",
    category: "corporate",
    name: "Toyota Innova Hycross",
    specs: { pax: 6, luggage: 4, engine: "2.0L Hybrid" },
    image: "/images/fleet/toyota-hycross.jpg"
  },
  {
    id: "toyota-innova-crysta",
    category: "corporate",
    name: "Toyota Innova Crysta",
    specs: { pax: 7, luggage: 4, engine: "2.4L Diesel" },
    image: "/images/fleet/toyota-crysta.jpg"
  },
  {
    id: "maruti-suzuki-ertiga",
    category: "employee",
    name: "Suzuki Ertiga",
    specs: { pax: 6, luggage: 2, engine: "1.5L Petrol" },
    image: "/images/fleet/ertiga.jpg"
  },
  {
    id: "force-urbania",
    category: "tourist",
    name: "Force Urbania",
    specs: { pax: 15, luggage: 10, engine: "2.6L FM" },
    image: "/images/fleet/urbania.jpg"
  },
  {
    id: "volvo-bus",
    category: "tourist",
    name: "Volvo Multi-Axle Bus",
    specs: { pax: 45, luggage: 50, engine: "11L Volvo" },
    image: "/images/fleet/volvo.jpg"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    company: "TCS",
    text: "NCM has been our trusted partner for employee transportation for over 5 years. Their punctuality and safety standards are unmatched."
  },
  {
    name: "Ananya Iyer",
    company: "Freelance",
    text: "Booked a premium cab for my sister's wedding. The car was immaculate and the chauffeur was extremely professional. Highly recommend!"
  }
];

export const HOW_IT_WORKS = [
  { step: 1, title: "Create Route", description: "Plan your trip and decide the route or destinations you want to cover." },
  { step: 2, title: "Book Ride", description: "Select your preferred vehicle from our fleet and book via app or website." },
  { step: 3, title: "Enjoy Journey", description: "Relax as our professional chauffeur takes you to your destination safely." }
];
