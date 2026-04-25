"use client";

import React, { use } from "react";
import { SERVICES, HOW_IT_WORKS } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useBooking } from "@/components/BookingProvider";

const ServiceDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const service = SERVICES.find(s => s.id === id);
  const { openBooking } = useBooking();

  if (!service) notFound();

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container">
          <SectionReveal>
            <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', marginBottom: '24px', fontWeight: 600 }}>
               <ArrowLeft size={16} /> Back to Services
            </Link>
            <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>{service.title}</h1>
            <p className="text-gold" style={{ fontSize: '1.5rem', maxWidth: '800px' }}>{service.tagline}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
               <SectionReveal>
                  <div>
                     <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Overview</h2>
                     <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--muted)', marginBottom: '40px' }}>
                        {service.description}
                     </p>
                     
                     <h3 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Key Benefits</h3>
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        {service.benefits.map(benefit => (
                          <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                             <CheckCircle className="text-gold" size={20} />
                             <span style={{ fontWeight: 500 }}>{benefit}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </SectionReveal>

               <SectionReveal delay={0.2}>
                  <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                     <h3 style={{ marginBottom: '24px' }}>Book {service.title}</h3>
                     <p className="text-muted" style={{ marginBottom: '30px', fontSize: '14px' }}>
                        Get a customized quote for your {service.title.toLowerCase()} requirements in Bangalore.
                     </p>
                     <button onClick={() => openBooking()} className="btn btn-primary" style={{ width: '100%', marginBottom: '16px' }}>
                        Book Now / Inquire
                     </button>
                     <Link href="/fleet" className="btn btn-outline" style={{ width: '100%' }}>
                        View Suitable Fleet
                     </Link>
                  </div>
               </SectionReveal>
            </div>
         </div>
      </section>

      {/* How it Works for this Service */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
         <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
               <h2>How to get started?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
               {HOW_IT_WORKS.map((step, i) => (
                 <SectionReveal key={i} delay={i * 0.1}>
                    <div style={{ textAlign: 'center' }}>
                       <div style={{ width: '60px', height: '60px', background: 'var(--accent)', borderRadius: '50%', color: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, margin: '0 auto 20px' }}>
                          {step.step}
                       </div>
                       <h4>{step.title}</h4>
                       <p className="text-muted" style={{ marginTop: '12px' }}>{step.description}</p>
                    </div>
                 </SectionReveal>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
         <SectionReveal>
            <h2 style={{ marginBottom: '24px' }}>Need a specialized solution?</h2>
            <p className="text-muted" style={{ marginBottom: '40px' }}>We provide customized transportation packages for events, weddings, and corporate summits.</p>
            <button onClick={() => openBooking()} className="btn btn-primary btn-lg">Talk to an Expert <ArrowRight size={18} /></button>
         </SectionReveal>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
