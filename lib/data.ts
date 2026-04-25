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
  { id: "premium", title: "Premium Cabs" },
  { id: "corporate", title: "Corporate Cabs" },
  { id: "employee", title: "Employee Transportation" },
  { id: "tourist", title: "Tourist Transport" }
];

export const FLEET = [
  // Premium Cabs
  {
    id: "mercedes-benz",
    category: "premium",
    tier: "Elite" as VehicleTier,
    name: "Mercedes Benz (C Class, S Class)",
    specs: { pax: 4, luggage: 3, engine: "V6 / Premium" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/2017-Mercedes-Benz-GLC-Class-2016-Mercedes-Benz-GLC.png",
    description: "The pinnacle of luxury chauffeur travel. Experience elite comfort, advanced safety, and prestigious aesthetics.",
    features: ["Premium Leather Interiors", "Advanced Climate Control", "Acoustic Noise Reduction", "Chauffeur Partition"]
  },
  {
    id: "bmw-series",
    category: "premium",
    tier: "Elite" as VehicleTier,
    name: "BMW (5 Series, 7 Series)",
    specs: { pax: 4, luggage: 2, engine: "TwinPower Turbo" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/white-BMW-sedan-2017-BMW-M3-2018-BMW-M3-Car-BMW-X6-BMW-M3-compact-Car-sedan-performance-Car-e1735454302721.png",
    description: "Forward-thinking luxury and smooth performance. Perfect for executive airport transfers and VIP meetings.",
    features: ["Dynamic Performance", "Spacious Legroom", "Premium Audio System", "Executive Seating"]
  },
  {
    id: "audi-q",
    category: "premium",
    tier: "Luxury" as VehicleTier,
    name: "Audi (Q5, Q7)",
    specs: { pax: 5, luggage: 4, engine: "Quattro All-Wheel" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/2018-Audi-Q7-2017-Audi-Q7-Car-Audi-Quattro-audi-compact-Car-vehicle-metal-e1735454638132.png",
    description: "Combining commanding stance with refined interiors. Optimal for confident and luxurious city travel.",
    features: ["Panoramic Sunroof", "Quattro Drive", "Enhanced Safety suite", "Generous Luggage Space"]
  },

  // Corporate Cabs
  {
    id: "toyota-innova-hycross",
    category: "corporate",
    tier: "Premium" as VehicleTier,
    name: "Toyota Innova Hycross",
    specs: { pax: 6, luggage: 4, engine: "Hybrid" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/InnovaHycross-e1735455572845.avif",
    description: "Modern efficiency meets spacious comfort. The new standard for long-distance corporate movement.",
    features: ["Hybrid Efficiency", "Captains Chairs", "Silent Cabin", "Premium Ride Quality"]
  },
  {
    id: "toyota-fortuner",
    category: "corporate",
    tier: "Luxury" as VehicleTier,
    name: "Toyota Innova Fortuner",
    specs: { pax: 6, luggage: 4, engine: "Performance" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/Toyota-Fortuner-SUV-Toyota-Fortuner-Toyota-Hilux-Car-Toyota-Corolla-tuning-vehicle-transport-metal.png",
    description: "Robust, reliable, and imposing. Excellent for off-road or commanding corporate presence.",
    features: ["High Ground Clearance", "Rugged Reliability", "Premium Safety", "Spacious Interior"]
  },
  {
    id: "toyota-innova-crysta",
    category: "corporate",
    tier: "Standard" as VehicleTier,
    name: "Toyota Innova Crysta",
    specs: { pax: 7, luggage: 4, engine: "Diesel" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/12/ToyotaCrysta-e1735455634512.png",
    description: "The undisputed champion of group travel in India. Unmatched reliability and sustained comfort.",
    features: ["Spacious 7-Seater", "Reliable Performance", "Rear AC Vents", "Ample Headroom"]
  },
  {
    id: "kia-seltos",
    category: "corporate",
    tier: "Premium" as VehicleTier,
    name: "Kia Seltos",
    specs: { pax: 4, luggage: 2, engine: "Efficient" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/Kia-Seltos-Transparent-Image-e1735454881946.png",
    description: "Sleek, modern, and tech-forward. A dynamic choice for individual executive transit.",
    features: ["Modern Tech Options", "Sleek Design", "Comfortable Seating", "City Agile"]
  },
  {
    id: "maruti-ciyaz",
    category: "corporate",
    tier: "Standard" as VehicleTier,
    name: "Maruti Ciaz",
    specs: { pax: 4, luggage: 3, engine: "Efficient sedan" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/MarutiCiaz-1-e1735454957679.png",
    description: "A comfortable and efficient executive sedan built for smooth city commutes.",
    features: ["Excellent Legroom", "Smooth Ride", "Fuel Efficient", "Large Boot Space"]
  },
  {
    id: "maruti-ertiga",
    category: "corporate",
    tier: "Standard" as VehicleTier,
    name: "Maruti Suzuki Ertiga",
    specs: { pax: 6, luggage: 2, engine: "Efficient MPV" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/Ertiga-e1735455022773.png",
    description: "Compact yet spacious. Ideal for small teams moving together through urban traffic.",
    features: ["Flexible Seating", "City Friendly", "Rear AC", "Compact MPV"]
  },
  {
    id: "maruti-dzire",
    category: "corporate",
    tier: "Standard" as VehicleTier,
    name: "Maruti DZire",
    specs: { pax: 4, luggage: 2, engine: "Economic" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/DZire.png",
    description: "The economic benchmark for business travel. Reliable, compact, and highly efficient.",
    features: ["Cost Effective", "Reliable Network", "Compact Sedan", "City Essential"]
  },
  {
    id: "toyota-etios",
    category: "corporate",
    tier: "Standard" as VehicleTier,
    name: "Toyota Etios",
    specs: { pax: 4, luggage: 2, engine: "Reliable" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/ToyotaEtios-e1735455182601.png",
    description: "Famed Toyota reliability in a sedan format. Safety and consistent performance guaranteed.",
    features: ["Toyota Reliability", "Spacious Cabin", "Safety Focus", "Economic Run"]
  },

  // Employee Transportation
  {
    id: "tempo-traveler",
    category: "employee",
    tier: "Standard" as VehicleTier,
    name: "Tempo Traveler (12 Seater)",
    specs: { pax: 12, luggage: 6, engine: "Heavy Duty" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/Tempo-Traveller-Hire-in-Delhi-Gurgaon-Force-Motors-Taxi-Bus-Car-Tempo-Travel-compact-Car-van-car.png",
    description: "The backbone of employee transit. Ensures teams arrive together, safely and on-time.",
    features: ["Pushback Seats", "AC Standard", "Group Commute", "Secure Boarding"]
  },
  {
    id: "tata-eicher-bus",
    category: "employee",
    tier: "Standard" as VehicleTier,
    name: "TATA / Eicher Buses (24-50 Seater)",
    specs: { pax: 50, luggage: 0, engine: "Commercial" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/skyline-next-exterior-31-e1735986780414.png",
    description: "Mass transit solutions for large-scale corporate workforces, prioritizing safety and scale.",
    features: ["High Capacity", "GPS Integrated", "Safety Compliant", "Cost Efficient"]
  },

  // Tourist Transport
  {
    id: "toyota-commuter",
    category: "tourist",
    tier: "Premium" as VehicleTier,
    name: "Toyota Commuter",
    specs: { pax: 10, luggage: 8, engine: "Smooth Drive" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/12/pngwing.com-9-e1736085622121-470x350.png",
    description: "Experience premium AC luxury that scales nicely for medium-sized tourist groups.",
    features: ["Premium AC", "Reclining Seats", "Smooth Suspension", "Generous Headroom"]
  },
  {
    id: "force-urbania",
    category: "tourist",
    tier: "Luxury" as VehicleTier,
    name: "Force Urbania",
    specs: { pax: 17, luggage: 10, engine: "FM 2.6" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/12/frontimage-png-e1736089207958.png",
    description: "The modern standard of tourist exploration. Stand-up headroom and expansive windows.",
    features: ["Stand-up Cabin", "Panorama Windows", "Individual AC Vents", "Luxury Seating"]
  },
  {
    id: "volvo-bus",
    category: "tourist",
    tier: "Elite" as VehicleTier,
    name: "Volvo Multi-Axle Bus",
    specs: { pax: 45, luggage: 50, engine: "Volvo D11" },
    priceEstimate: "Request Quote",
    image: "https://newcarmobile.in/wp-content/uploads/2024/12/9600_15m_sleeper_FR_01a_hires-nbg-e1736088203435.avif",
    description: "Inter-city travel redefined. Delivering aircraft-like comfort on the road for large groups.",
    features: ["Air Suspension", "Sleeper Options", "Washroom onboard", "Entertainment System"]
  }
];

export const SERVICES = [
  {
    id: "corporate-cab",
    title: "Corporate Cabs",
    tagline: "Executive travel solutions designed for the modern business.",
    description: "Experience punctual, discrete, and seamless hotel and office transfers for executives. Our corporate cabs are maintained to the highest hygiene and safety standards to ensure productivity on the move.",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/Toyota-Fortuner-SUV-Toyota-Fortuner-Toyota-Hilux-Car-Toyota-Corolla-tuning-vehicle-transport-metal.png"
  },
  {
    id: "self-drive-cars",
    title: "Self-Drive Cars",
    tagline: "Absolute freedom with our curated collection of self-drive vehicles.",
    description: "Experience a personalized and private travel adventure. Whether a weekend getaway or a short business trip, our self-drive fleet gives you complete control over your journey.",
    image: "https://newcarmobile.in/wp-content/uploads/2024/11/Kia-Seltos-Transparent-Image-e1735454881946.png"
  },
  {
    id: "employee-transportation",
    title: "Employee Transportation",
    tagline: "Scalable and reliable transit solutions for your entire workforce.",
    description: "Ensuring your team navigates busy city routes safely and punctually. We integrate GPS tracking and rigorous driver protocols to manage multi-route daily commutes effortlessly.",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/Tempo-Traveller-Hire-in-Delhi-Gurgaon-Force-Motors-Taxi-Bus-Car-Tempo-Travel-compact-Car-van-car.png"
  },
  {
    id: "premium-cabs",
    title: "Premium Cabs",
    tagline: "The absolute pinnacle of chauffeur-driven luxury.",
    description: "Arrive at every destination experiencing the true hallmarks of professional elegance. Our premium fleet features flagship sedans from Mercedes-Benz, BMW, and Audi for VIP protocol.",
    image: "https://newcarmobile.in/wp-content/uploads/2024/04/2017-Mercedes-Benz-GLC-Class-2016-Mercedes-Benz-GLC.png"
  },
  {
    id: "tourist-transportation",
    title: "Tourist Transportation",
    tagline: "Witness the beauty of India in unparalleled group comfort.",
    description: "Perfect for intercity travel with wide landscape windows and premium seating. From high-tech Force Urbanias to luxury Volvo coaches, we make the journey as magnificent as the destination.",
    image: "https://newcarmobile.in/wp-content/uploads/2024/12/9600_15m_sleeper_FR_01a_hires-nbg-e1736088203435.avif"
  }
];

export const TESTIMONIALS = [
  {
    name: "Sandeep Rao",
    role: "Director of Ops, Tech Giant",
    text: "NCM has consistently delivered elite-level corporate transport for our entire Bangalore division. Their punctuality is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sandeep"
  },
  {
    name: "Elena Gilbert",
    role: "Travel Vlogger",
    text: "Their tourist buses are incredibly comfortable. The best way to see South India, especially with their highly trained drivers!",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const HOW_IT_WORKS = [
  { step: '1', title: 'Plan Your Trip', description: 'Enter where you want to be picked up and dropped off or the number of hours you wish to book.' }, 
  { step: '2', title: 'Select Your Ride', description: 'Browse our diverse fleet, pick the perfect vehicle, and book effortlessly through our platform.' }, 
  { step: '3', title: 'Embrace the Journey', description: 'Receive your booking confirmation. Relax and let us take you on a smooth, comfortable journey.' }
];

export const WHY_CHOOSE_US = [
  { title: '24/7 Support', description: 'Our dedicated team is ready to assist with any inquiries or issues at any time.' }, 
  { title: 'Safety Focus', description: 'Rigorous vehicle maintenance and up-to-date protocols ensure secure journeys.' },
  { title: 'Efficiency', description: 'Advanced dispatch and routing technology minimizes delays and maximizes convenience.' },
  { title: 'Transparent pricing', description: 'Trust us for honest, clear, ethical pricing without any hidden costs.' }
];
