"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    // AOS فقط هنا
    AOS.init({ once: false, duration: 1000 });
  }, []);


  // السكروول — في useEffect مستقل
  useEffect(() => {
    let isScrolling = false;
    let allowNormalScroll = false;

    const handleWheel = (e: WheelEvent) => {
      if (allowNormalScroll) return;
      e.preventDefault();

      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0) {
        if (swiper.activeIndex < swiper.slides.length - 1) {
          swiper.slideNext();
        } else {
          allowNormalScroll = true;
        }
      } else {
        if (swiper.activeIndex > 0) {
          swiper.slidePrev();
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);

  }, []);


  const [slideKey, setSlideKey] = useState(0);

  const handleSlideChange = () => {
    setSlideKey(prev => prev + 1);
    setTimeout(() => AOS.refresh(), 50);
  };

  return (
    <section className="relative" id="hero">
      <div className="absolute sm:w-40 md:w-60 lg:w-80 h-40 sm:h-60 md:h-80 bg-primary/15 blur-3xl animate-float -top-80 rounded-full -right-20" />

      <div className="max-w-screen-2xl mx-auto xl:mt-20 min-h-screen px-4 sm:px-6 lg:px-8">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={false}
          slidesPerView={1}
          spaceBetween={0}
          speed={900}
          centeredSlides={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide key={slideKey + "-1"}>
            <SlideContent
              title1="مؤسسة"
              title2="رافد"
              title3="للتنمية"
              text="هي منظمة مدنية لا تهدف إلى الربح التجاري، تأسست بتاريخ 11 مارس 2025م بموجب ترخيص رقم 704 الصادر عن وزارة الشؤون الاجتماعية والعمل. تهدف المؤسسة إلى المساهمة في تعزيز التنمية المستدامة من خلال تقديم الاستشارات الإدارية والتقنية، وتأهيل الكوادر الشابة، وتمكين القطاع الخيري من التحول الرقمي، بما يحقق الأثر الإيجابي في المجتمع."
              image="/hero/hero2.png"
            />
          </SwiperSlide>

          <SwiperSlide key={slideKey + "-2"}>
            <SlideContent
              title1=""
              title2="رافد.."
              title3="نُمكن القدرات"
              subtitle="و نــبني المستقبــــل"
              text=""
              image="/hero/hero3.png"
            />
          </SwiperSlide>

          <div className="swiper-pagination mt-10 sm:mt-20"></div>
        </Swiper>
      </div>
    </section>
  );
};

const SlideContent = ({
  title1,
  title2,
  title3,
  subtitle,
  text,
  image,
}: {
  title1?: string;
  title2?: string;
  title3?: string;
  subtitle?: string;
  text?: string;
  image: string;
}) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <div className="w-full lg:w-1/2 text-center lg:text-right">
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-extrabold text-primary flex flex-wrap justify-center lg:justify-start items-center gap-2 mt-10 md:mt-0" data-aos="fade-right">
          <span>{title1}</span>
          <span className="relative">
            {title2}
            <span className={`absolute left-1/2 top-8 md:top-10 xl:top-12 w-12 sm:w-20 md:w-24 translate-y-[10%] ${title1 === '' ? 'translate-x-[-30%]' : 'translate-x-[-50%]'}`}>
              <Image
                src="/hero/Vector.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </span>
          </span>
          <span>{title3}</span>
        </h1>
        {subtitle && (
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-extrabold text-primary mt-4 sm:mt-6" data-aos="fade-left">
            {subtitle}
          </h2>
        )}
        {text && (
          <p className="text-secondary text-base sm:text-lg md:text-xl xl:text-2xl mt-6 sm:mt-10 leading-relaxed px-2 sm:px-0" data-aos="fade-up-left">
            {text}
          </p>
        )}
        <div className="mt-8 md:mt-12 text-center lg:text-right">
          <Link
            href="#"
            className="text-white bg-primary rounded-full text-lg sm:text-xl md:text-2xl py-2 sm:py-3 px-8 sm:px-10 inline-block hover:bg-primary/90 transition"
          >
            المزيد
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center" data-aos="zoom-in">
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
          <Image src={image} alt="" width={600} height={600} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
