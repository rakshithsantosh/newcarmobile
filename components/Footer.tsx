import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { SITE_CONFIG, SERVICES, FLEET_CATEGORIES } from "@/lib/data";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
               <span className={styles.ncm}>NCM</span>
               <span className={styles.brandName}>New Car Mobile</span>
            </Link>
            <p className={styles.desc}>
              Bangalore&apos;s premier chauffeur and fleet management company. Providing luxury, safety, and reliability for over 30 years.
            </p>
            <div className={styles.contactList}>
               <div className={styles.contactItem}>
                 <MapPin size={18} className="text-gold" />
                 <span>{SITE_CONFIG.address}</span>
               </div>
               <div className={styles.contactItem}>
                 <Mail size={18} className="text-gold" />
                 <span>{SITE_CONFIG.email}</span>
               </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            <div className={styles.linkCol}>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/fleet">Our Fleet</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/terms">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4>Our Services</h4>
              <ul>
                {SERVICES.map(s => (
                  <li key={s.id}><Link href={`/services/${s.id}`}>{s.title}</Link></li>
                ))}
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4>Our Fleet</h4>
              <ul>
                {FLEET_CATEGORIES.map(c => (
                  <li key={c.id}><Link href={`/fleet#${c.id}`}>{c.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Col */}
          <div className={styles.ctaCol}>
            <h4>Brochure</h4>
            <p>Download our corporate brochure for detailed services and fleet info.</p>
            <button className="btn btn-outline" style={{width: '100%', marginTop: '12px'}}>
              <Download size={18} /> Download PDF
            </button>
            
            <div className={styles.phones}>
              <h4>24/7 Support</h4>
              {SITE_CONFIG.phones.slice(0, 3).map(p => (
                <div key={p.number} className={styles.phoneItem}>
                  <Phone size={16} />
                  <span>{p.name}: {p.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} New Car Mobile. All rights reserved. ISO 9001-2015 Certified.</p>
          <div className={styles.socials}>
             <span>Facebook</span>
             <span>Instagram</span>
             <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
