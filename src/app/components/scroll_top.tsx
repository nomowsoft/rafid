"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 1500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-43 left-12 z-50 transition-all duration-500 ease-out backdrop-blur-md hover:scale-110 hover:-translate-y-1 animate-fade-in"
          aria-label="العودة للأعلى"
        >
          <div className="bg-info rounded-full h-18 w-18 relative mb-4 border-t-4 border-primary">
            <Image src="/footer/solarup.png" alt="..." width={50} height={20} className="top-2.5 right-3 absolute"/>
          </div>
        </button>
      )}
    </>
  );
};
