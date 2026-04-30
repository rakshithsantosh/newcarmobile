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
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setCompleted(true);
  };

  const selectedVehicle = FLEET.find(v => v.id === formData.vehicleId);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/90 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl glass overflow-hidden border-gold/20"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-muted hover:text-gold transition-colors z-10">
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full min-h-[500px]">
          {/* Progress Sidebar */}
          <div className="w-full md:w-64 bg-graphite p-8 border-r border-gold/10">
            <p className="text-gold uppercase tracking-[0.2em] font-black text-xs mb-8">Booking Wizard</p>
            <div className="space-y-6">
              {steps.map(step => {
                const isActive = currentStep === step.id;
                const isPast = currentStep > step.id;
                return (
                  <div key={step.id} className={`flex items-center gap-4 transition-colors ${isActive ? 'text-gold' : isPast ? 'text-white' : 'text-muted'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${isActive ? 'border-gold bg-gold/10' : isPast ? 'border-white bg-white/10' : 'border-muted/30'}`}>
                      {isPast ? <CheckCircle2 size={16} /> : <span className="text-xs font-bold">{step.id}</span>}
                    </div>
                    <span className="text-sm font-semibold tracking-tight">{step.title}</span>
                  </div>
                );
              })}
            </div>
            {selectedVehicle && (
                <div className="mt-12 p-4 border border-gold/10 bg-gold/5">
                    <p className="text-[10px] text-gold uppercase tracking-widest font-black mb-2 text-center">Selected Fleet</p>
                    <div className="relative w-full h-24 mb-3">
                        <Image src={selectedVehicle.image} alt="" fill className="object-cover" />
                    </div>
                    <p className="text-xs font-bold text-center">{selectedVehicle.name}</p>
                </div>
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 flex flex-col">
            <AnimatePresence mode="wait">
              {completed ? (
                <motion.div 
                  key="done"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-ink" />
                  </div>
                  <h2 className="text-3xl font-black mb-4">Inquiry Received!</h2>
                  <p className="text-muted max-w-sm">Our booking concierge will review your trip details and contact you within the next 15 minutes.</p>
                  <button onClick={onClose} className="btn-premium mt-8"><span>Close Portal</span></button>
                </motion.div>
              ) : (
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1"
                >
                  {/* Step 1: Trip Info */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-black mb-2">Trip Orchestration</h2>
                      <p className="text-muted text-sm mb-8">Define your journey parameters below.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-gold tracking-widest">Pickup Address</label>
                           <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                              <input 
                                className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-gold outline-none transition-colors" 
                                placeholder="Start location in Bangalore"
                                value={formData.pickup}
                                onChange={e => setFormData({...formData, pickup: e.target.value})}
                              />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-gold tracking-widest">Destination</label>
                           <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                              <input 
                                className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-gold outline-none transition-colors" 
                                placeholder="Desired end point"
                                value={formData.dropoff}
                                onChange={e => setFormData({...formData, dropoff: e.target.value})}
                              />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-gold tracking-widest">Travel Date & Time</label>
                           <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                              <input 
                                type="datetime-local"
                                className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-gold outline-none transition-colors" 
                                value={formData.date}
                                onChange={e => setFormData({...formData, date: e.target.value})}
                              />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-gold tracking-widest">Passengers</label>
                           <div className="relative">
                              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                              <select 
                                className="w-full bg-white/5 border border-white/10 p-4 pl-12 focus:border-gold outline-none appearance-none transition-colors"
                                value={formData.pax}
                                onChange={e => setFormData({...formData, pax: parseInt(e.target.value)})}
                              >
                                {[1,2,3,4,5,6,7,8,12,15,45].map(n => <option key={n} value={n} className="bg-ink">{n} Pax</option>)}
                              </select>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Fleet Selection */}
                  {currentStep === 2 && (
                    <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scroll">
                      <h2 className="text-3xl font-black mb-2">Fleet Selection</h2>
                      <div className="grid grid-cols-1 gap-4">
                        {FLEET.filter(v => v.specs.pax >= formData.pax).map(v => (
                          <div 
                            key={v.id} 
                            onClick={() => setFormData({...formData, vehicleId: v.id})}
                            className={`group cursor-pointer p-4 border transition-all flex items-center gap-6 ${formData.vehicleId === v.id ? 'bg-gold/10 border-gold shadow-glow' : 'bg-white/5 border-white/5 hover:border-gold/30'}`}
                          >
                            <div className="relative w-32 h-20 border border-white/10 overflow-hidden">
                               <Image src={v.image} alt="" fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                               <p className="text-[10px] font-black text-gold uppercase mb-1">{v.tier}</p>
                               <h4 className="text-xl font-black">{v.name}</h4>
                               <p className="text-muted text-xs">{v.specs.pax} Seats • {v.specs.engine}</p>
                            </div>
                            <div className="text-right">
                               <p className="text-xs text-muted mb-1">Est. Starting</p>
                               <p className="text-lg font-black">{v.priceEstimate}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-black mb-2">Finalization</h2>
                      <p className="text-muted text-sm mb-8">Review your journey and provide contact details.</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                         <div className="p-4 border border-white/5 bg-white/5">
                            <p className="text-[10px] font-black text-gold uppercase mb-2 italic">Route</p>
                            <p className="font-bold truncate text-sm">{formData.pickup || "Not set"} ➔ {formData.dropoff || "Not set"}</p>
                         </div>
                         <div className="p-4 border border-white/5 bg-white/5">
                            <p className="text-[10px] font-black text-gold uppercase mb-2 italic">Vehicle</p>
                            <p className="font-bold text-sm">{selectedVehicle?.name || "Not selected"}</p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <input 
                            className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" 
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                         />
                         <div className="grid grid-cols-2 gap-4">
                            <input 
                                className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" 
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                            <input 
                                className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" 
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                         </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer Buttons */}
            {!completed && (
              <div className="mt-8 pt-8 border-t border-gold/10 flex items-center justify-between">
                <button 
                  onClick={prevStep} 
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 font-black uppercase text-xs tracking-widest ${currentStep === 1 ? 'opacity-30 cursor-not-allowed' : 'text-white hover:text-gold'}`}
                >
                  <ArrowLeft size={16} /> Back
                </button>

                {currentStep < 3 ? (
                  <button 
                    onClick={nextStep} 
                    className="btn-premium group"
                  >
                    <span>Proceed to Selection <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" /></span>
                  </button>
                ) : (
                  <button 
                    onClick={handleFinish} 
                    disabled={isSubmitting}
                    className="btn-premium flex items-center gap-3"
                  >
                    <span>{isSubmitting ? 'Securing Fleet...' : 'Confirm Inquiry'}</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingWizard;
