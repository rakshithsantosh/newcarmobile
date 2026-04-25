import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import ServiceGrid from "@/components/ServiceGrid";
import FleetTeaser from "@/components/FleetTeaser";
import HowItWorks from "@/components/HowItWorks";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSlider />
      
      <StatsCounter />
      
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <SectionReveal>
              <div>
                <p className="text-gold">30 Years of Legacy</p>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '24px' }}>Excellence in Motion Since 1994</h2>
                <p className="text-muted" style={{ marginBottom: '32px', fontSize: '1.1rem' }}>
                  New Car Mobile (NCM) has been at the forefront of Bangalore&apos;s transportation industry for three decades. 
                  Our commitment to safety, punctuality, and premium service has made us the trusted partner for over 300 corporates.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                  {['ISO 9001-2015 Certified', '24/7 Premium Support', 'GPS Tracked Fleet', 'Professional Chauffeurs'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={20} className="text-gold" />
                      <span style={{ fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div style={{ background: 'var(--surface)', minHeight: '400px', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden', border: '1px solid var(--border)' }}>
                 {/* Image Placeholder */}
                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, var(--primary), var(--secondary))', opacity: 0.2 }} />
                 <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <span className="text-gold" style={{ fontSize: '1.5rem', fontWeight: 600 }}>NCM Premium Vehicles</span>
                 </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ServiceGrid />
      
      <HowItWorks />
      
      <FleetTeaser />
      
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="container text-center">
           <SectionReveal>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Trusted by Industry Leaders</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', opacity: 0.6 }}>
                 {['TCS', 'Infosys', 'Wipro', 'Accenture', 'Amazon'].map(client => (
                   <span key={client} style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>{client}</span>
                 ))}
              </div>
           </SectionReveal>
        </div>
      </section>

      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
           <SectionReveal>
             <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Ready to Experience Premium Travel?</h2>
             <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
               Book your ride today and discover why we are Bangalore&apos;s most trusted fleet management company.
             </p>
             <Link href="/contact" className="btn btn-primary btn-lg">Book Now</Link>
           </SectionReveal>
        </div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '80%', background: 'var(--accent)', filter: 'blur(150px)', opacity: 0.1, zIndex: 1 }} />
      </section>
    </>
  );
}
