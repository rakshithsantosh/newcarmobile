import React from "react";
import SectionReveal from "@/components/SectionReveal";
import StatsCounter from "@/components/StatsCounter";
import { Target, Eye, ShieldCheck, Award, Users, History } from "lucide-react";

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '90px' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'var(--gradient-dark)', textAlign: 'center' }}>
        <div className="container">
          <SectionReveal>
            <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>About New Car Mobile</h1>
            <p className="text-gold" style={{ fontSize: '1.5rem', fontWeight: 500 }}>Driving Excellence for Over 30 Years</p>
          </SectionReveal>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
             <SectionReveal>
                <div style={{ background: 'var(--surface)', height: '450px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }} />
             </SectionReveal>
             <SectionReveal delay={0.3}>
                <div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <History className="text-gold" size={24} />
                      <span className="text-gold" style={{ fontWeight: 700, letterSpacing: '1px' }}>OUR LEGACY</span>
                   </div>
                   <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Established in 1994</h2>
                   <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                      Founded with a vision to revolutionize the transportation industry in Bangalore, New Car Mobile (NCM) has grown from a small fleet to one of the most respected transportation providers in India.
                      <br /><br />
                      We are an ISO 9001-2015 certified company, ensuring that every trip you take with us meets the highest international standards of quality and safety. Our journey of 30 years is built on the trust of our corporate partners and the satisfaction of millions of travelers.
                   </p>
                </div>
             </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
               <SectionReveal>
                  <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                     <Target className="text-gold" size={48} style={{ marginBottom: '24px' }} />
                     <h3>Our Mission</h3>
                     <p className="text-muted" style={{ marginTop: '16px' }}>
                        To provide safe, reliable, and premium transportation solutions that exceed customer expectations through innovation, technology, and exceptional service.
                     </p>
                  </div>
               </SectionReveal>
               <SectionReveal delay={0.2}>
                  <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                     <Eye className="text-gold" size={48} style={{ marginBottom: '24px' }} />
                     <h3>Our Vision</h3>
                     <p className="text-muted" style={{ marginTop: '16px' }}>
                        To be the most preferred and trusted fleet management partner in India, recognized for our excellence in employee and corporate transportation.
                     </p>
                  </div>
               </SectionReveal>
            </div>
         </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Why NCM */}
      <section className="section-padding">
         <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
               <h2>The NCM Advantage</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
               {[
                 { icon: ShieldCheck, title: 'Safety First', desc: 'GPS tracked vehicles and background verified chauffeurs.' },
                 { icon: Award, title: 'Quality Assured', desc: 'ISO 9001-2015 certified operations and premium fleet.' },
                 { icon: Users, title: '300+ Corporates', desc: 'The trusted choice for global MNCs and top Indian companies.' }
               ].map((item, i) => (
                 <SectionReveal key={i} delay={i * 0.1}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                       <item.icon className="text-gold" size={40} style={{ marginBottom: '16px' }} />
                       <h4>{item.title}</h4>
                       <p className="text-muted" style={{ marginTop: '12px' }}>{item.desc}</p>
                    </div>
                 </SectionReveal>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
