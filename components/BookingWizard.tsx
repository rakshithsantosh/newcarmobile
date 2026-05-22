"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, Car, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { FLEET } from "@/lib/data";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicleId?: string;
}

const steps = [
  { id: 1, title: "Trip Details", icon: MapPin },
  { id: 2, title: "Vehicle Selection", icon: Car },
  { id: 3, title: "Summary & Details", icon: CheckCircle2 }
];

const BookingWizard = ({ isOpen, onClose, selectedVehicleId }: Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    pax: 1,
    vehicleId: selectedVehicleId || "",
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleFinish = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setCompleted(true);
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (e) {
      console.error(e);
      alert("There was an error communicating with the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedVehicle = FLEET.find(v => v.id === formData.vehicleId);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/60 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[700px]"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-navy/40 hover:text-navy transition-colors z-10">
          <X size={24} />
        </button>

        {/* Left Sidebar */}
        <div className="w-full md:w-72 bg-gray-50 p-10 border-r border-gray-200">
          <p className="text-accent uppercase tracking-[0.2em] font-bold text-[10px] mb-12 italic">Booking Concierge</p>
          <div className="space-y-8">
            {steps.map(step => {
              const isActive = currentStep === step.id;
              const isPast = currentStep > step.id;
              return (
                <div key={step.id} className="flex items-center gap-5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                    isActive ? 'border-accent bg-accent text-white scale-110 shadow-lg shadow-accent/20' : 
                    isPast ? 'border-navy bg-navy text-white' : 
                    'border-gray-300 text-gray-400'
                  }`}>
                    {isPast ? <CheckCircle2 size={20} /> : <span className="text-sm font-bold">{step.id}</span>}
                  </div>
                  <span className={`text-sm font-bold tracking-tight ${isActive ? 'text-navy' : isPast ? 'text-navy/70' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {selectedVehicle && currentStep > 1 && (
            <div className="mt-20 p-6 bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in-up">
              <p className="text-[9px] text-accent uppercase tracking-widest font-bold mb-4 text-center">Selected Fleet</p>
              <div className="relative w-full h-24 mb-4">
                <Image src={selectedVehicle.image} alt={selectedVehicle.name} fill className="object-contain" />
              </div>
              <p className="text-xs font-bold text-navy text-center">{selectedVehicle.name}</p>
            </div>
          )}
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-10 flex flex-col bg-white overflow-y-auto">
          <AnimatePresence mode="wait">
            {completed ? (
              <motion.div 
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} className="text-accent" />
                </div>
                <h2 className="text-4xl font-bold text-navy mb-4">Reservation Locked</h2>
                <p className="text-gray-500 max-w-sm leading-relaxed">Our concierge team will review your orchestration and contact you within 15 minutes for final validation.</p>
                <button onClick={onClose} className="mt-12 bg-navy text-white px-12 py-4 rounded-xl font-bold hover:bg-navy/90 transition-all shadow-xl shadow-navy/20">
                  Return to Landing
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col"
              >
                {/* Step 1: Details */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-bold text-navy mb-3">Trip Orchestration</h2>
                      <p className="text-gray-400 font-medium">Define your luxury travel parameters.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      {[
                        { label: "Pickup Location", key: "pickup", icon: MapPin, placeholder: "Enter pickup point" },
                        { label: "Destination", key: "dropoff", icon: MapPin, placeholder: "Enter destination" },
                        { label: "Travel Date & Time", key: "date", icon: Calendar, type: "datetime-local" }
                      ].map((field) => (
                        <div key={field.key} className="space-y-3">
                          <label className="text-[10px] uppercase font-bold text-accent tracking-widest">{field.label}</label>
                          <div className="relative group">
                            <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors" size={20} />
                            <input 
                              type={field.type || "text"}
                              className="w-full bg-gray-50 border border-gray-100 p-4 pl-12 rounded-xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-navy font-semibold placeholder:text-gray-300" 
                              placeholder={field.placeholder}
                              value={formData[field.key as keyof typeof formData]}
                              onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold text-accent tracking-widest">Passengers</label>
                        <div className="relative group">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-accent transition-colors" size={20} />
                          <select 
                            className="w-full bg-gray-50 border border-gray-100 p-4 pl-12 rounded-xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none appearance-none transition-all text-navy font-semibold"
                            value={formData.pax}
                            onChange={e => setFormData({...formData, pax: parseInt(e.target.value)})}
                          >
                            {[1,2,3,4,6,8,12,15,45].map(n => <option key={n} value={n}>{n} Passengers</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Fleet */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-bold text-navy mb-3">Select Your Fleet</h2>
                      <p className="text-gray-400 font-medium">Curated vehicles matching your travel requirements.</p>
                    </div>
                    <div className="space-y-4 pr-2 overflow-y-auto max-h-[380px] custom-scroll">
                      {FLEET.filter(v => v.specs.pax >= formData.pax).map(v => (
                        <div 
                          key={v.id} 
                          onClick={() => setFormData({...formData, vehicleId: v.id})}
                          className={`group cursor-pointer p-5 border-2 transition-all flex items-center gap-8 rounded-2xl ${
                            formData.vehicleId === v.id ? 'bg-accent/5 border-accent' : 'bg-gray-50 border-transparent hover:border-gray-200'
                          }`}
                        >
                          <div className="relative w-36 h-24 overflow-hidden rounded-xl bg-white border border-gray-100">
                             <Image src={v.image} alt={v.name} fill className="object-contain p-2" />
                          </div>
                          <div className="flex-1">
                             <p className="text-[9px] font-bold text-accent uppercase tracking-widest mb-1 italic">{v.tier} Class</p>
                             <h4 className="text-2xl font-bold text-navy">{v.name}</h4>
                             <p className="text-gray-400 text-sm font-medium">{v.specs.pax} Seats • Professional Chauffeur</p>
                          </div>
                          <div className="text-right">
                             <p className="text-xs text-gray-400 font-bold mb-1">Starting</p>
                             <p className="text-2xl font-bold text-navy">{v.priceEstimate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-bold text-navy mb-3">Final Validation</h2>
                      <p className="text-gray-400 font-medium">Review orchestration and secure contact.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                       <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                          <p className="text-[10px] font-bold text-accent uppercase mb-3 italic">Route Logistics</p>
                          <p className="text-navy font-bold">{formData.pickup || "Manual Pickup"} ➔ {formData.dropoff || "Manual Dropoff"}</p>
                       </div>
                       <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                          <p className="text-[10px] font-bold text-accent uppercase mb-3 italic">Confirmed Fleet</p>
                          <p className="text-navy font-bold">{selectedVehicle?.name || "Selection Pending"}</p>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-accent tracking-widest pl-1">Full Name</label>
                          <input 
                              className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-navy font-bold" 
                              placeholder="Your official name"
                              value={formData.name}
                              onChange={e => setFormData({...formData, name: e.target.value})}
                          />
                       </div>
                       <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-accent tracking-widest pl-1">Email Address</label>
                            <input 
                                className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-navy font-bold" 
                                placeholder="Contact email"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-accent tracking-widest pl-1">Phone Number</label>
                            <input 
                                className="w-full bg-gray-50 border border-gray-100 p-5 rounded-2xl focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-navy font-bold" 
                                placeholder="+91 Phone number"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                          </div>
                       </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Footer */}
          {!completed && (
            <div className="mt-auto pt-10 flex items-center justify-between border-t border-gray-100">
              <button 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className={`flex items-center gap-3 font-bold uppercase text-xs tracking-[0.2em] transition-colors ${
                  currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-navy'
                }`}
              >
                <ArrowLeft size={18} /> Previous Sequence
              </button>

              <button 
                onClick={currentStep === 3 ? handleFinish : nextStep} 
                disabled={isSubmitting || (currentStep === 2 && !formData.vehicleId)}
                className="bg-navy text-white px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-navy/90 hover:shadow-2xl hover:shadow-navy/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
              >
                {isSubmitting ? 'Syncing...' : currentStep === 3 ? 'Lock Reservation' : 'Advance Sequence'}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookingWizard;
