"use client";

import React from "react";
import { HOW_IT_WORKS } from "@/lib/data";
import styles from "./HowItWorks.module.css";
import SectionReveal from "./SectionReveal";

const HowItWorks = () => {
  return (
    <section className="section-padding bg-dark">
      <div className="container">
        <div className={styles.header}>
          <p className="text-gold">Seamless Experience</p>
          <h2>How It Works</h2>
        </div>

        <div className={styles.grid}>
          {HOW_IT_WORKS.map((item, index) => (
            <SectionReveal key={item.step} delay={index * 0.2}>
              <div className={styles.step}>
                <div className={styles.number}>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {index < HOW_IT_WORKS.length - 1 && <div className={styles.connector} />}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
