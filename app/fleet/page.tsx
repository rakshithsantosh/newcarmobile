"use client";

import React from "react";
import { FLEET, FLEET_CATEGORIES } from "@/lib/data";
import SectionReveal from "@/components/SectionReveal";
import { Users, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "./Fleet.module.css";

const FleetPage = () => {
  return (
    <div style={{ paddingTop: '90px' }}>
      <section className="section-padding" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container text-center">
          <SectionReveal>
            <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>Our World-Class Fleet</h1>
            <p className="text-gold" style={{ fontSize: '1.25rem' }}>Premium vehicles for every occasion and requirement.</p>
          </SectionReveal>
        </div>
      </section>

      {FLEET_CATEGORIES.map((cat, catIdx) => (
        <section key={cat.id} id={cat.id} className="section-padding" style={{ background: catIdx % 2 === 0 ? 'transparent' : 'var(--surface)' }}>
          <div className="container">
            <div className={styles.sectionHeader}>
               <h2>{cat.title}</h2>
               <p className="text-muted">High-quality {cat.title.toLowerCase()} for Bangalore routes.</p>
            </div>

            <div className={styles.grid}>
              {FLEET.filter(car => car.category === cat.id).map((car, carIdx) => (
                <SectionReveal key={car.id} delay={carIdx * 0.1}>
                   <div className={styles.carCard}>
                      <div className={styles.imageBox}>
                         {/* Image here */}
                      </div>
                      <div className={styles.content}>
                         <h3>{car.name}</h3>
                         <div className={styles.specs}>
                            <span><Users size={14} /> {car.specs.pax} Pax</span>
                            <span><Briefcase size={14} /> {car.specs.luggage} Bags</span>
                         </div>
                         <p className={styles.desc}>{car.description || "Premium comfort and safety guaranteed."}</p>
                         <Link href={`/fleet/${car.id}`} className={styles.cardBtn}>
                            Full Specs <ChevronRight size={16} />
                         </Link>
                      </div>
                   </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding" style={{ background: 'var(--accent)', color: 'var(--background)' }}>
         <div className="container text-center">
            <SectionReveal>
               <h2 style={{ color: 'inherit' }}>Ready to Book Your Ride?</h2>
               <p style={{ marginTop: '16px', opacity: 0.9, marginBottom: '32px' }}>Choose the best vehicle for your journey and book now.</p>
               <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--background)', color: 'white' }}>Get Inquiry Form</Link>
            </SectionReveal>
         </div>
      </section>
    </div>
  );
};

export default FleetPage;
