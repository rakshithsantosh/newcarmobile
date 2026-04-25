import React from "react";
import ServiceGrid from "@/components/ServiceGrid";
import SectionReveal from "@/components/SectionReveal";

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '90px' }}>
      <section className="section-padding" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container text-center">
          <SectionReveal>
            <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>Our Services</h1>
            <p className="text-gold" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
              Comprehensive fleet management and chauffeur solutions tailored for your corporate and personal needs.
            </p>
          </SectionReveal>
        </div>
      </section>

      <ServiceGrid />

      <section className="section-padding" style={{ background: 'var(--surface)' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
               <SectionReveal>
                  <div>
                     <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Why Choose Our Services?</h2>
                     <p className="text-muted" style={{ marginBottom: '32px' }}>
                        At New Car Mobile, we don&apos;t just provide cars; we provide peace of mind. Our services are built on the pillars of safety, reliability, and premium comfort.
                     </p>
                     <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {[
                          { t: 'Customized Solutions', d: 'We tailor our fleet and routes to match your specific corporate requirements.' },
                          { t: 'Advanced Technology', d: 'Real-time GPS tracking and dedicated dashboard for corporate clients.' },
                          { t: 'Expert Chauffeurs', d: 'Highly trained, background-verified, and professional drivers.' }
                        ].map(item => (
                          <li key={item.t}>
                             <h4 className="text-gold">{item.t}</h4>
                             <p className="text-muted" style={{ fontSize: '14px' }}>{item.d}</p>
                          </li>
                        ))}
                     </ul>
                  </div>
               </SectionReveal>
               <SectionReveal delay={0.3}>
                  <div style={{ background: 'var(--primary)', height: '400px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                     <div style={{ padding: '40px', textAlign: 'center' }}>
                        <h3 className="text-gold">30+ Years</h3>
                        <p>of Expertise in Bangalore</p>
                     </div>
                  </div>
               </SectionReveal>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
