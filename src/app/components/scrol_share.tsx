"use client";
import { useState } from "react";
import Image from "next/image";

export const SocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const shareButtons = [
    { id:1, image: "/shar_link/gg_facebook.png", label: "Facebook", color: "from-blue-600/20 to-blue-500/20 border-blue-400/50 text-blue-400", angle: -60 },
    { id:2, image: "/shar_link/basil_instagram-solid.png", label: "Instagram", color: "from-pink-600/20 to-pink-500/20 border-pink-400/50 text-pink-400", angle: 0 },
    { id:3, image: "/shar_link/x twitter.png", label: "Twitter", color: "from-sky-600/20 to-sky-500/20 border-sky-400/50 text-sky-400", angle: -30 },
    { id:4, image: "/shar_link/dashicons_whatsapp.png", label: "WhatsApp", color: "from-cyan-600/20 to-cyan-500/20 border-cyan-400/50 text-cyan-400", angle: 30 },
  ];

  const getButtonPosition = (angle: number, isOpen: boolean) => {
    if (!isOpen) return { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 };
    
    const radius = 100;
    const radians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    
    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`,
      opacity: 1,
    };
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = document.title;
    
    const shareUrls: Record<string, string> = {
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      Twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      WhatsApp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      Instagram: `https://www.instagram.com/`,
      Copy: '',
    };

    if (platform === 'Copy') {
      navigator.clipboard.writeText(url);
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="fixed bottom-20 left-8 z-50">
      <div className="relative w-25 h-25">
        {/* Share buttons */}
        {shareButtons.map((btn, index) => (
          <button
            key={btn.label}
            onClick={() => handleShare(btn.label)}
            className={`absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-gradient-to-br  bg-info backdrop-blur-md shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center`}
            style={{
              ...getButtonPosition(btn.angle, isOpen),
              transitionDelay: `${index * 50}ms`,
            }}
            aria-label={btn.label}
          >
            <Image src={btn.image} alt="..." width={25} height={20} />
          </button>
        ))}

        {/* Main share button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10  hover:border-primary transition-all duration-500  hover:scale-110"
          aria-label="مشاركة"
        >
            <div className="bg-info rounded-full h-15 w-15 flex justify-center items-center">
                <Image src="/footer/share.png" alt="..." width={30} height={20} className={`top-3 absolute ${isOpen ? 'rotate-180' : ''}`}/>
            </div>
        </button>
      </div>
    </div>
  );
};
