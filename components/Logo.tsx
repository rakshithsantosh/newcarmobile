import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "text-current" }) => {
  return (
    <svg 
      viewBox="0 0 320 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimalist Car Silhouette */}
      <path 
        d="M30 65 C 30 50, 60 30, 110 25 C 160 20, 200 20, 240 30 C 270 38, 290 50, 300 65" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      
      {/* Modern Typography */}
      <text 
        x="160" 
        y="50" 
        fontFamily="ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" 
        fontSize="32" 
        fontWeight="800" 
        fontStyle="italic" 
        textAnchor="middle" 
        fill="currentColor"
        letterSpacing="0.5"
      >
        New Car Mobile
      </text>
      
      {/* Premium Subtitle */}
      <text 
        x="160" 
        y="75" 
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontSize="10" 
        fontWeight="700" 
        textAnchor="middle" 
        fill="currentColor"
        letterSpacing="4"
        opacity="0.6"
      >
        EXECUTIVE MOBILITY
      </text>
    </svg>
  );
};

export default Logo;
