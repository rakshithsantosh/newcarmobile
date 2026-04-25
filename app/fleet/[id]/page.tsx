"use client";

import React, { use } from "react";
import { FLEET } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";
import { Users, Briefcase, Shield, Gauge, Settings, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useBooking } from "@/components/BookingProvider";

const VehicleDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const vehicle = FLEET.find(v => v.id === id);
  const { openBooking } = useBooking();

  if (!vehicle) notFound();

  return (
    <div style={{ paddingTop: '90px' }}>
      <section className="section-padding">
        <div className="container">
          <SectionReveal>
            <Link href="/fleet" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', marginBottom: '32px', fontWeight: 600 }}>
               <ArrowLeft size={16} /> Back to Fleet
            </Link>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
             <SectionReveal>
                <div style={{ height: '450px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', backgroundImage: `url(${vehicle.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   {!vehicle.image && <div style={{ padding: '80px', textAlign: 'center', opacity: 0.2, fontSize: '2rem' }}>NCM PREMIUM</div>}
                </div>
             </SectionReveal>

             <SectionReveal delay={0.3}>
                <div>
                  <p className="text-gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '8px' }}>{vehicle.category}</p>
                  <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>{vehicle.name}</h1>
                  <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                     {vehicle.description || "The perfect choice for professional transportation in Bangalore. Combining comfort, safety, and reliability."}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '50px' }}>
                     {[
                       { icon: Users, label: 'Capacity', val: `${vehicle.specs.pax} Passengers` },
                       { icon: Briefcase, label: 'Luggage', val: `${vehicle.specs.luggage} Bags` },
                       { icon: Gauge, label: 'Engine', val: vehicle.specs.engine },
                       { icon: Settings, label: 'Transmission', val: 'Automatic / Manual' }
                     ].map(spec => (
                       <div key={spec.label} style={{ display: 'flex', gap: '15px' }}>
                          <spec.icon className="text-gold" size={24} />
                          <div>
                             <p style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase' }}>{spec.label}</p>
                             <p style={{ fontWeight: 600 }}>{spec.val}</p>
                          </div>
                       </div>
                     ))}
                  </div>

                  <div style={{ display: 'flex', gap: '20px' }}>
                     <button onClick={() => openBooking(vehicle.id)} className="btn btn-primary btn-lg" style={{ flexGrow: 1 }}>
                        Book This Vehicle <Calendar size={18} style={{ marginLeft: '10px' }} />
                     </button>
                     <button onClick={() => openBooking(vehicle.id)} className="btn btn-outline btn-lg">Request Quote</button>
                  </div>
                </div>
             </SectionReveal>
          </div>
        </div>
      </section>

      {/* Safety & Features */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
         <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Standard across our fleet</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
               {[
                 { t: 'GPS Tracking', d: 'Real-time monitoring for safety and ETA accuracy.' },
                 { t: 'Professional Driver', d: 'Uniformed, background-checked, and polite chauffeurs.' },
                 { t: 'Clean & Sanitized', d: 'Vehicles are cleaned after every single trip.' },
                 { t: 'Panic Button', d: 'Direct SOS link to our 24/7 command center.' }
               ].map(feat => (
                 <div key={feat.t} className="glass" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
                    <Shield className="text-gold" size={32} style={{ marginBottom: '16px' }} />
                    <h4>{feat.t}</h4>
                    <p className="text-muted" style={{ fontSize: '14px', marginTop: '10px' }}>{feat.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default VehicleDetailPage;
