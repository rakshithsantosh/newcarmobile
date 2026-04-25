"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { SITE_CONFIG, SERVICES, FLEET_CATEGORIES } from "@/lib/data";
import { useBooking } from "./BookingProvider";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.ncm}>NCM</span>
            <div className={styles.logoText}>
              <span className={styles.brandName}>New Car Mobile</span>
              <span className={styles.tagline}>Premium Chauffeur & Fleet</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopMenu}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            
            <div 
              className={styles.dropdown}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={styles.navLink}>
                Services <ChevronDown size={16} />
              </button>
              {activeDropdown === 'services' && (
                <div className={`${styles.dropdownContent} glass animate-fade-in`}>
                  {SERVICES.map(service => (
                    <Link key={service.id} href={`/services/${service.id}`} className={styles.dropdownLink}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className={styles.dropdown}
              onMouseEnter={() => setActiveDropdown('fleet')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={styles.navLink}>
                Our Fleet <ChevronDown size={16} />
              </button>
              {activeDropdown === 'fleet' && (
                <div className={`${styles.dropdownContent} glass animate-fade-in`}>
                  <Link href="/fleet" className={styles.dropdownLink}>All Fleet</Link>
                  {FLEET_CATEGORIES.map(category => (
                    <Link key={category.id} href={`/fleet#${category.id}`} className={styles.dropdownLink}>
                      {category.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>

          {/* CTA */}
          <div className={styles.navActions}>
            <a href={`tel:${SITE_CONFIG.phones[0].number}`} className={styles.phoneLink}>
              <Phone size={18} className="text-gold" />
              <span>{SITE_CONFIG.phones[0].number}</span>
            </a>
            <button onClick={() => openBooking()} className="btn btn-primary btn-sm">Book Now</button>

            {/* Mobile Toggle */}
            <button className={styles.mobileToggle} onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`${styles.mobileMenu} glass animate-fade-in`}>
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About Us</Link>
          <div className={styles.mobileGroup}>
            <p className={styles.mobileGroupTitle}>Services</p>
            {SERVICES.map(service => (
              <Link key={service.id} href={`/services/${service.id}`} onClick={toggleMenu}>
                {service.title}
              </Link>
            ))}
          </div>
          <div className={styles.mobileGroup}>
            <p className={styles.mobileGroupTitle}>Fleet</p>
            <Link href="/fleet" onClick={toggleMenu}>All Fleet</Link>
            {FLEET_CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/fleet#${cat.id}`} onClick={toggleMenu}>
                {cat.title}
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          <div className={styles.mobileCta}>
             <a href={`tel:${SITE_CONFIG.phones[0].number}`} className="btn btn-outline">{SITE_CONFIG.phones[0].number}</a>
             <button className="btn btn-primary" onClick={() => { openBooking(); toggleMenu(); }}>Book Your Ride</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
