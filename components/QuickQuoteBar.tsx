"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useBooking } from "./BookingProvider";

const QuickQuoteBar = () => {
  const { openBooking } = useBooking();
  const [active, setActive] = useState(false);

  return (
    <div className={`w-full transition-all duration-700 ${active ? 'scale-[1.02]' : 'scale-100'}`}>
      <div className="surface-glass p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 border border-white/40 shadow-elite">
        {/* Pickup */}
        <div className="flex-1 w-full relative group">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-accent transition-colors">
            <MapPin size={18} />
          </div>
          <input 
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className="w-full bg-white/50 backdrop-blur-sm p-5 pl-14 text-sm font-bold outline-none placeholder:text-text-muted rounded-xl focus:bg-white transition-all border border-transparent focus:border-accent/20" 
            placeholder="Pickup Point" 
          />
        </div>

        {/* Date */}
        <div className="w-full md:w-56 relative group">
           <div className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-accent transition-colors">
            <Calendar size={18} />
          </div>
          <input 
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            type="date"
            className="w-full bg-white/50 backdrop-blur-sm p-5 pl-14 text-sm font-bold outline-none placeholder:text-text-muted appearance-none rounded-xl focus:bg-white transition-all border border-transparent focus:border-accent/20" 
          />
        </div>

        {/* Action */}
        <button 
          onClick={() => openBooking()}
          className="w-full md:w-auto btn-accent group whitespace-nowrap !py-5 !px-8 h-full"
        >
          <span className="flex items-center gap-3">
            Search
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickQuoteBar;
