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
    { label: "Successful Trips", value: "3.6M+", icon: "Trips" },
    { label: "Happy Customers", value: "1.8M+", icon: "Users" },
    { label: "Corporate Clients", value: "300+", icon: "Briefcase" },
    { label: "Kilometers Covered", value: "90M+", icon: "Map" }
  ]
};

export type VehicleTier = 'Standard' | 'Premium' | 'Luxury' | 'Elite';

export const FLEET_CATEGORIES = [
  { id: "corporate", title: "Corporate Cabs" },
  { id: "tourist", title: "Tourist Transport" },
  { id: "premium", title: "Premium Fleet" }
];

export const FLEET = [
  {
    id: "mercedes-s-class",
    category: "premium",
    tier: "Elite" as VehicleTier,
    name: "Mercedes S-Class",
    specs: { pax: 3, luggage: 2, engine: "V6 Biturbo" },
    priceEstimate: "₹18,000/day",
    image: "/images/fleet/mercedes-s.jpg",
    description: "The pinnacle of luxury chauffeur travel.",
    features: ["Massaging Seats", "Rear Entertainment", "Burmester Sound", "Ambient Lighting"]
  },
  {
    id: "bmw-7-series",
    category: "premium",
    tier: "Elite" as VehicleTier,
    name: "BMW 7 Series",
    specs: { pax: 3, luggage: 2, engine: "TwinPower Turbo" },
    priceEstimate: "₹17,500/day",
    image: "/images/fleet/bmw-7.jpg",
    description: "Forward-thinking luxury and smooth performance."
  },
  {
    id: "toyota-innova-hycross",
    category: "corporate",
    tier: "Premium" as VehicleTier,
    name: "Toyota Innova Hycross",
    specs: { pax: 6, luggage: 4, engine: "Hybrid" },
    priceEstimate: "₹4,500/day",
    image: "/images/services/corporate.jpg",
    description: "Modern efficiency meets spacious comfort."
  },
  {
    id: "toyota-innova-crysta",
    category: "corporate",
    tier: "Standard" as VehicleTier,
    name: "Toyota Innova Crysta",
    specs: { pax: 7, luggage: 4, engine: "Diesel" },
    priceEstimate: "₹3,800/day",
    image: "/images/fleet/toyota-crysta.jpg"
  },
  {
    id: "force-urbania",
    category: "tourist",
    tier: "Premium" as VehicleTier,
    name: "Force Urbania",
    specs: { pax: 15, luggage: 10, engine: "FM 2.6" },
    priceEstimate: "₹6,500/day",
    image: "/images/fleet/urbania.jpg"
  },
  {
    id: "volvo-bus",
    category: "tourist",
    tier: "Luxury" as VehicleTier,
    name: "Volvo Multi-Axle",
    specs: { pax: 45, luggage: 50, engine: "Volvo D11" },
    priceEstimate: "₹25,000/day",
    image: "/images/fleet/volvo.jpg"
  }
];

export const SERVICES = [
  {
    id: "corporate-cab",
    title: "Corporate Cabs",
    tagline: "The Business Class of Road Travel",
    description: "Tailored for the modern professional. Punctual, discreet, and reliable.",
    image: "/images/services/corporate.jpg"
  },
  {
    id: "employee-transportation",
    title: "Employee Transport",
    tagline: "Safety First, Every Single Day",
    description: "Scalable fleet solutions for Bangalore's top tech parks and MNCs.",
    image: "/images/services/employee.jpg"
  },
  {
    id: "luxury-rentals",
    title: "Premium Cabs",
    tagline: "Elegance on Demand",
    description: "Make an impression with our curated collection of luxury sedans.",
    image: "/images/fleet/mercedes-e.jpg"
  }
];

export const TESTIMONIALS = [
  {
    name: "Sandeep Rao",
    role: "Director of Ops, Tech Giant",
    text: "NCM has consistently delivered elite-level corporate transport for our entire Bangalore division.",
    avatar: "https://i.pravatar.cc/150?u=sandeep"
  },
  {
    name: "Elena Gilbert",
    role: "Travel Vlogger",
    text: "Their tourist buses are incredibly comfortable. The best way to see South India!",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const HOW_IT_WORKS = [{ step: '1', title: 'Book', description: 'Select your service and vehicle.' }, { step: '2', title: 'Confirm', description: 'Receive instant confirmation.' }, { step: '3', title: 'Ride', description: 'Enjoy your professional journey.' }];
export const WHY_CHOOSE_US = [{ title: 'Safe', description: 'Vetted drivers.' }, { title: 'Reliable', description: '24/7 support.' }];
