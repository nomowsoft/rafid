"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

export const Hero = () => {
  return (
    <section className="relative" id="hero">
      {/* Floating blur shape */}
      <div className="absolute sm:w-40 md:w-60 lg:w-200 h-40 sm:h-60 md:h-200 bg-primary/15 blur-3xl animate-float -top-80 rounded-full -right-20" />
      <div className="max-w-screen-2xl mx-auto mt-10 lg:mt-10 xl:mt-20 min-h-[80vh] sm:min-h-[90vh] px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          speed={1000}
          centeredSlides={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-4 py-5">
              <div className="w-full lg:w-1/2 text-center lg:text-right">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-primary flex flex-wrap justify-center lg:justify-start items-center gap-2">
                  <span>مؤسسة</span>
                  <span className="relative">
                    رافد
                    <span className="absolute left-1/2 top-8 md:top-10 xl:top-13 w-12 sm:w-20 md:w-24 translate-x-[-50%] translate-y-[10%]">
                      <Image src="/hero/Vector.png" alt="" width={500} height={500} className="w-full h-auto" />
                    </span>
                  </span>
                  <span>للتنمية</span>
                </h1>
                <p className="text-secondary text-base sm:text-lg md:text-xl mt-6 sm:mt-10 leading-relaxed px-2 sm:px-0">
                  هي منظمة مدنية لا تهدف إلى الربح التجاري، تأسست بتاريخ 11 مارس 2025م بموجب ترخيص رقم 704 الصادر عن وزارة الشؤون الاجتماعية والعمل. تهدف المؤسسة إلى المساهمة في تعزيز التنمية المستدامة من خلال تقديم الاستشارات الإدارية والتقنية، وتأهيل الكوادر الشابة، وتمكين القطاع الخيري من التحول الرقمي، بما يحقق الأثر الإيجابي في المجتمع.
                </p>
                <div className="mt-8 md:mt-12 text-center lg:text-right">
                  <Link href="#" className="text-white bg-primary rounded-full text-lg sm:text-xl md:text-2xl py-2 sm:py-3 px-8 sm:px-10 inline-block hover:bg-primary/90 transition">
                    المزيد
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                  <Image src="/hero/hero2.png" alt="" width={600} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 py-5">
              <div className="w-full lg:w-1/2 text-center lg:text-right">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-primary flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
                  <span className="relative">
                    رافد
                    <span className="absolute left-1/2 top-8 md:top-10 xl:top-13 w-12 sm:w-20 md:w-24 translate-x-[-50%] translate-y-[10%]">
                      <Image src="/hero/Vector.png" alt="" width={500} height={500} className="w-full h-auto" />
                    </span>
                  </span>
                  <span>..</span>
                  <span>نمكن القدرات</span>
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-primary mt-4 sm:mt-6">
                  و نــبني المستقبــــل
                </h1>
                <div className="mt-8 md:mt-12 text-center lg:text-right">
                  <Link href="#" className="text-white bg-primary rounded-full text-lg sm:text-xl md:text-2xl py-2 sm:py-3 px-8 sm:px-10 inline-block hover:bg-primary/90 transition">
                    المزيد
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                  <Image src="/hero/hero3.png" alt="" width={600} height={600} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-pagination mt-10 sm:mt-20"></div>
        </Swiper>
      </div>
    </section>
  );
};
