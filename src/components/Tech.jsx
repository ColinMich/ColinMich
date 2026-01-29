import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      return window.matchMedia("(max-width: 768px)").matches;
    };
    
    setIsMobile(checkMobile());
    
    const handleResize = () => {
      setIsMobile(checkMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row flex-wrap justify-center'} gap-8 ${isMobile ? 'py-4' : 'gap-10'}`}>
      {technologies.map((technology) => (
        <div 
          className={`${isMobile ? 'w-20 h-20' : 'w-28 h-28'} flex items-center justify-center`} 
          key={technology.name}
          title={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          {isMobile && (
            <div className="absolute -bottom-6 text-xs text-center text-gray-600 font-medium">
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");