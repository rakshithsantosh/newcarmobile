"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useBooking } from "./BookingProvider";

const QuickQuoteBar = () => {
  const { openBooking } = useBooking();
  const [active, setActive] = useState(false);

  return (
    <div className={`w-full transition-all duration-700 ${active ? 'py-4' : 'py-2'}`}>
      <div className="section-shell">
        <div className="relative glass border-gold/10 p-2 md:p-1 flex flex-col md:flex-row items-center gap-1">
          {/* Pickup */}
          <div className="flex-1 w-full relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
              <MapPin size={16} />
            </div>
            <input 
              onFocus={() => setActive(true)}
              className="w-full bg-transparent p-4 pl-12 text-sm outline-none placeholder:text-muted/50" 
              placeholder="Pickup Location" 
            />
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-white/10" />

          {/* Destination */}
          <div className="flex-1 w-full relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
              <MapPin size={16} />
            </div>
            <input 
              onFocus={() => setActive(true)}
              className="w-full bg-transparent p-4 pl-12 text-sm outline-none placeholder:text-muted/50" 
              placeholder="Destination Address" 
            />
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-white/10" />

          {/* Date */}
          <div className="w-full md:w-48 relative group">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
              <Calendar size={16} />
            </div>
            <input 
              onFocus={() => setActive(true)}
              type="date"
              className="w-full bg-transparent p-4 pl-12 text-sm outline-none placeholder:text-muted/50 appearance-none" 
            />
          </div>

          {/* Action */}
          <button 
            onClick={() => openBooking()}
            className="w-full md:w-auto btn-premium !py-3 !px-6 group whitespace-nowrap"
          >
            <span className="flex items-center gap-3 text-xs tracking-widest uppercase font-black">
              Check Availability 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickQuoteBar;
