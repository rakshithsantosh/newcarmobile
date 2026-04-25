"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import styles from "./ServiceGrid.module.css";
import SectionReveal from "./SectionReveal";

const ServiceGrid = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className={styles.header}>
          <p className="text-gold">Our Excellence</p>
          <h2>Tailored Transportation Services</h2>
        </div>
        
        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.1}>
              <div className={styles.card}>
                <div className={styles.imageWrap}>
                   {/* Placeholder for now */}
                   <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                  <Link href={`/services/${service.id}`} className={styles.link}>
                    Explore Service <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
