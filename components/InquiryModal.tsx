"use client";

import React, { useState } from "react";
import { X, Send, Calendar, Clock, MapPin, Car } from "lucide-react";
import styles from "./InquiryModal.module.css";
import { FLEET } from "@/lib/data";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: string;
}

const InquiryModal = ({ isOpen, onClose, selectedVehicle }: Props) => {
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
        onClose();
    }, 4000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass animate-fade-in`} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}><X size={24} /></button>
        
        {success ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h2>Inquiry Sent!</h2>
            <p>Our fleet manager will call you within 15 minutes to confirm details.</p>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>Book Your Premium Ride</h2>
              <p>Enter trip details for an instant callback and quote.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.group}>
                  <label><MapPin size={14} /> Pickup Location</label>
                  <input type="text" placeholder="Hotel, Office, or Airport" required />
                </div>
                <div className={styles.group}>
                  <label><MapPin size={14} /> Dropoff Location</label>
                  <input type="text" placeholder="Destination in Bangalore" required />
                </div>
                <div className={styles.group}>
                  <label><Calendar size={14} /> Date</label>
                  <input type="date" required />
                </div>
                <div className={styles.group}>
                  <label><Clock size={14} /> Time</label>
                  <input type="time" required />
                </div>
                <div className={styles.groupFull}>
                  <label><Car size={14} /> Preferred Vehicle</label>
                  <select defaultValue={selectedVehicle}>
                    <option value="">Any Premium Sedan</option>
                    {FLEET.map(v => (
                        <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.groupHalf}>
                   <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.groupHalf}>
                   <input type="tel" placeholder="Mobile Number" required />
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                Confirm Booking Inquiry <Send size={18} />
              </button>
            </form>
            
            <p className={styles.footerNote}>
               By clicking, you agree to receive a callback from NCM. ISO 9001-2015 Certified Service.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
