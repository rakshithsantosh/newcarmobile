import { type Car } from "@/components/CarCard";
import { ContactForm } from "@/components/ContactForm";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionReveal } from "@/components/SectionReveal";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FeaturedCars } from "@/components/FeaturedCars";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const featuredCars: Car[] = [
  {
    name: "BMW 5 Series",
    type: "Executive sedan",
    price: "Rs. 6,999",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1100&q=85",
    specs: ["Automatic", "4 seats", "Petrol"],
    badge: "Most booked"
  },
  {
    name: "Mercedes GLC",
    type: "Premium SUV",
    price: "Rs. 8,499",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1100&q=85",
    specs: ["Automatic", "5 seats", "Diesel"],
    badge: "Airport pick"
  },
  {
    name: "Audi A6",
    type: "Luxury sedan",
    price: "Rs. 7,499",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1100&q=85",
    specs: ["Automatic", "4 seats", "Hybrid"],
    badge: "Executive"
  }
];

const testimonials = [
  {
    quote:
      "The car arrived spotless, the pickup took five minutes, and pricing was exactly what they promised. Exceptional service.",
    name: "Nikhil Rao",
    role: "Founder, Bengaluru",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote:
      "AstraDrive felt more like a premium concierge than a rental counter. Perfect for my late airport arrivals.",
    name: "Sara Thomas",
    role: "Consultant, Kochi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote:
      "I booked a GLC for a VIP client visit. Smooth delivery, excellent vehicle condition, and quick support on WhatsApp.",
    name: "Arjun Mehta",
    role: "Sales Director, Mumbai",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Home() {
  return (
    <main className="bg-ink text-white font-sans selection:bg-gold selection:text-ink">
      <Navbar />
      <Hero />
      
      <div className="bg-ink">
        <FeaturedCars cars={featuredCars} />
      </div>

      <WhyChooseUs />

      <section className="bg-ink py-24 sm:py-32">
        <SectionReveal className="section-shell">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-gold">
                The Verdict
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Proof from real trips.
              </h2>
            </div>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </SectionReveal>
      </section>

      <section className="bg-graphite py-24 sm:py-32">
        <SectionReveal className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24 lg:items-start">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Get availability. <br />No sales call.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              Share your trip details once. We respond with available cars,
              final pricing, and exact pickup options. No commitment required.
            </p>
            <div className="mt-10 grid gap-4 text-sm font-medium text-white/70">
              <div className="rounded-xl glass-panel p-5 border-l-2 border-l-gold">
                No payment or credit card required to inquire.
              </div>
              <div className="rounded-xl glass-panel p-5 border-l-2 border-l-gold">
                Prefer faster booking? Use the WhatsApp concierge below.
              </div>
            </div>
          </div>
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <ContactForm />
          </div>
        </SectionReveal>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
