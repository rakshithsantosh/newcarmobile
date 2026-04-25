"use client";

import React, { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { SITE_CONFIG } from "@/lib/data";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import styles from "./Contact.module.css";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      <section className="section-padding" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container">
          <SectionReveal>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Contact Us</h1>
            <p className="text-gold" style={{ fontSize: '1.25rem' }}>We&apos;re Here to Help You Move Safely & Comfortably</p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            {/* Info Column */}
            <SectionReveal>
              <div className={styles.infoCol}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><MapPin size={24} /></div>
                  <div>
                    <h3>Our Office</h3>
                    <p className="text-muted">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Mail size={24} /></div>
                  <div>
                    <h3>Email Address</h3>
                    <p className="text-muted">{SITE_CONFIG.email}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Phone size={24} /></div>
                  <div>
                    <h3>Contact Numbers</h3>
                    <div className={styles.phoneList}>
                      {SITE_CONFIG.phones.map(p => (
                        <p key={p.number} className="text-muted">
                          <strong>{p.name}:</strong> {p.number}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.supportCard}>
                   <MessageSquare className="text-gold" size={32} />
                   <h4>24/7 Corporate Support</h4>
                   <p className="text-muted">Direct line for our corporate partners and fleet management inquiries.</p>
                </div>
              </div>
            </SectionReveal>

            {/* Form Column */}
            <SectionReveal delay={0.3}>
              <div className={styles.formCol}>
                <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                  <h2 style={{ marginBottom: '30px' }}>Leave us your info</h2>
                  {submitted ? (
                    <div className={styles.successMsg}>
                       <h3>Thank you!</h3>
                       <p>Your inquiry has been received. Our team will contact you shortly.</p>
                    </div>
                  ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+91 98XXX XXXXX" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Service Interested In</label>
                        <select>
                          <option>Corporate Cab</option>
                          <option>Employee Transportation</option>
                          <option>Self-Drive Cars</option>
                          <option>Premium Cabs</option>
                          <option>Tourist Transportation</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label>Message / Details</label>
                        <textarea placeholder="Tell us about your requirements..." rows={4}></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                        Send Message <Send size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '400px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div className="text-center">
            <MapPin size={40} className="text-gold" style={{ marginBottom: '16px' }} />
            <p className="text-muted">Interactive Google Map Integration Placeholder</p>
            <p className="text-gold">{SITE_CONFIG.address}</p>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
