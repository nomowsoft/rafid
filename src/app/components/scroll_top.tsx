"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-43 left-12 z-50 transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-1 animate-fade-in"
          aria-label="العودة للأعلى"
        >
          <div className="bg-info rounded-full h-18 w-18 relative mb-4 flex items-center justify-center">
            <svg
              className="absolute  -rotate-90"
              width="75"
              height="75"
              viewBox="0 0 80 80"
            >
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="#502A73"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{
                  transition: "stroke-dashoffset 0.3s ease-out",
                }}
              />
            </svg>
            <Image
              src="/footer/solarup.png"
              alt="الرجوع للأعلى"
              width={50}
              height={50}
              className="relative top-0"
            />
          </div>
        </button>
      )}
    </>
  );
};
