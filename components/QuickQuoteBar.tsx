"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useBooking } from "./BookingProvider";

const QuickQuoteBar = () => {
  const { openBooking } = useBooking();
  const [active, setActive] = useState(false);

  return (
    <div className={`w-full transition-all duration-700 ${active ? 'scale-[1.02]' : 'scale-100'}`}>
      <div className="surface-glass p-3 rounded-[2px] flex flex-col md:flex-row items-center gap-3 border border-accent/15 shadow-elite">
        {/* Pickup */}
        <div className="flex-1 w-full relative group">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-accent transition-colors">
            <MapPin size={16} />
          </div>
          <input 
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className="w-full bg-white/60 backdrop-blur-sm py-4 pl-14 pr-6 text-sm font-semibold outline-none placeholder:text-text-muted rounded-[2px] focus:bg-white transition-all border border-transparent focus:border-accent/40 text-navy" 
            placeholder="Pickup Location" 
          />
        </div>

        {/* Date */}
        <div className="w-full md:w-56 relative group">
           <div className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-accent transition-colors">
            <Calendar size={16} />
          </div>
          <input 
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            type="date"
            className="w-full bg-white/60 backdrop-blur-sm py-4 pl-14 pr-6 text-sm font-semibold outline-none placeholder:text-text-muted appearance-none rounded-[2px] focus:bg-white transition-all border border-transparent focus:border-accent/40 text-navy" 
          />
        </div>

        {/* Action */}
        <button 
          onClick={() => openBooking()}
          className="w-full md:w-auto btn-primary group whitespace-nowrap !py-4 !px-8 h-full"
        >
          <span className="flex items-center gap-3">
            Search Fleet
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickQuoteBar;
