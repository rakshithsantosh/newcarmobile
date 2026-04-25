"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/data";
import styles from "./StatsCounter.module.css";
import SectionReveal from "./SectionReveal";

const StatsCounter = () => {
  return (
    <section className={`${styles.stats} section-padding`}>
      <div className="container">
        <div className={styles.grid}>
          {SITE_CONFIG.stats.map((stat, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div className={styles.statItem}>
                <h2 className={styles.value}>{stat.value}</h2>
                <p className={styles.label}>{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
