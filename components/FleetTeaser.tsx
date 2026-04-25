"use client";

import React from "react";
import Link from "next/link";
import { Users, Briefcase, Info, Calendar } from "lucide-react";
import { FLEET } from "@/lib/data";
import { useBooking } from "./BookingProvider";
import styles from "./FleetTeaser.module.css";
import SectionReveal from "./SectionReveal";

const FleetTeaser = () => {
  const { openBooking } = useBooking();
  const teaserFleet = FLEET.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="text-gold">Our Fleet</p>
            <h2 style={{ fontSize: '3rem', marginTop: '8px' }}>World Class Vehicles</h2>
          </div>
          <Link href="/fleet" className="btn btn-outline">View All Fleet</Link>
        </div>

        <div className={styles.grid}>
          {teaserFleet.map((car, index) => (
            <SectionReveal key={car.id} delay={index * 0.1}>
              <div className={styles.carCard}>
                <div className={styles.carImage} style={{ backgroundImage: `url(${car.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   {!car.image && <div style={{ padding: '40px', textAlign: 'center', opacity: 0.3 }}>NCM Premium</div>}
                </div>
                <div className={styles.carInfo}>
                  <p className={styles.category}>{car.category}</p>
                  <h3>{car.name}</h3>
                  <div className={styles.specs}>
                    <span><Users size={14} /> {car.specs.pax} Pax</span>
                    <span><Briefcase size={14} /> {car.specs.luggage} Bags</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                     <button onClick={() => openBooking(car.id)} className="btn btn-primary btn-sm" style={{ flexGrow: 1 }}>
                        Book <Calendar size={14} />
                     </button>
                     <Link href={`/fleet/${car.id}`} className={styles.detailsBtn} style={{ width: 'auto' }}>
                        <Info size={16} />
                     </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetTeaser;
