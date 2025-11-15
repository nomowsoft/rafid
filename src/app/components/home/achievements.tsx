"use client";
import { Card } from "../ui/card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import { useState } from "react";

type AchievementsType = {
  id: number;
  image: string;
  title: string;
  description: string;
  dataNumbers: DataNumber[];
};
type DataNumber = {
  id: number;
  title: string;
  description: string;
};

const achievements: AchievementsType[] = [
  {
    id: 1,
    image: "/activetes/icon1.png",
    title: "التدريب و التوظيف OJT",
     description:
      "منذ تأسيس 'رافد للتنمية' عملنا بجد لنكون جزءاً أساسياً في دفع عجلة التنمية المستدامة. تركّزت جهودنا على تأهيل الكفاءات الشابة وصناعة فرص حقيقية لهم في سوق العمل، ودعم القطاع الخيري بحلول رقمية مبتكرة ساعدته على تحسين الأداء وزيادة الأثر المجتمعي. كما حرصنا على تنظيم ورش عمل ولقاءات معرفية لنشر ثقافة التطوير والابتكار، إلى جانب بناء شراكات استراتيجية محلية ودولية ساهمت في توسيع نطاق خدماتنا وتعزيز حضورنا كمؤسسة موثوقة وفاعلة في مجال التنمية",
    dataNumbers: [
      { id: 1, title: "1000+", description: "متدرب مؤهل بمهارات عملية" },
      { id: 2, title: "250+", description: "مشروع تقني للقطاع الخيري" },
      { id: 3, title: "1000+", description: "متدرب مؤهل بمهارات عملية" },
      { id: 4, title: "250+", description: "مشروع تقني للقطاع الخيري" },
    ],
  },
  {
    id: 2,
    image: "/activetes/icon1.png",
    title: "التدريب و التوظيف OJT 2",
     description:
      "منذ تأسيس 'رافد للتنمية' عملنا بجد لنكون جزءاً أساسياً في دفع عجلة التنمية المستدامة. تركّزت جهودنا على تأهيل الكفاءات الشابة وصناعة فرص حقيقية لهم في سوق العمل، ودعم القطاع الخيري بحلول رقمية مبتكرة ساعدته على تحسين الأداء وزيادة الأثر المجتمعي. كما حرصنا على تنظيم ورش عمل ولقاءات معرفية لنشر ثقافة التطوير والابتكار، إلى جانب بناء شراكات استراتيجية محلية ودولية ساهمت في توسيع نطاق خدماتنا وتعزيز حضورنا كمؤسسة موثوقة وفاعلة في مجال التنمية",
    dataNumbers: [
      { id: 1, title: "30+", description: "ورش عمل وأنشطة" },
      { id: 2, title: "15+", description: "شراكات محلية ودولية" },
      { id: 3, title: "30+", description: "ورش عمل وأنشطة" },
      { id: 4, title: "15+", description: "شراكات محلية ودولية" },
    ],
  },
  {
    id: 3,
    image: "/activetes/icon1.png",
    title: "التدريب و التوظيف OJT 2",
     description:
      "منذ تأسيس 'رافد للتنمية' عملنا بجد لنكون جزءاً أساسياً في دفع عجلة التنمية المستدامة. تركّزت جهودنا على تأهيل الكفاءات الشابة وصناعة فرص حقيقية لهم في سوق العمل، ودعم القطاع الخيري بحلول رقمية مبتكرة ساعدته على تحسين الأداء وزيادة الأثر المجتمعي. كما حرصنا على تنظيم ورش عمل ولقاءات معرفية لنشر ثقافة التطوير والابتكار، إلى جانب بناء شراكات استراتيجية محلية ودولية ساهمت في توسيع نطاق خدماتنا وتعزيز حضورنا كمؤسسة موثوقة وفاعلة في مجال التنمية",
    dataNumbers: [
      { id: 1, title: "50+", description: "ورش عمل وأنشطة" },
      { id: 2, title: "100+", description: "شراكات محلية ودولية" },
      { id: 3, title: "1000+", description: "ورش عمل وأنشطة" },
      { id: 4, title: "20+", description: "شراكات محلية ودولية" },
    ],
  },
  {
    id: 4,
    image: "/activetes/icon1.png",
    title: "التدريب و التوظيف OJT 2",
     description:
      "منذ تأسيس 'رافد للتنمية' عملنا بجد لنكون جزءاً أساسياً في دفع عجلة التنمية المستدامة. تركّزت جهودنا على تأهيل الكفاءات الشابة وصناعة فرص حقيقية لهم في سوق العمل، ودعم القطاع الخيري بحلول رقمية مبتكرة ساعدته على تحسين الأداء وزيادة الأثر المجتمعي. كما حرصنا على تنظيم ورش عمل ولقاءات معرفية لنشر ثقافة التطوير والابتكار، إلى جانب بناء شراكات استراتيجية محلية ودولية ساهمت في توسيع نطاق خدماتنا وتعزيز حضورنا كمؤسسة موثوقة وفاعلة في مجال التنمية",
    dataNumbers: [
      { id: 1, title: "20+", description: "ورش عمل وأنشطة" },
      { id: 2, title: "20+", description: "شراكات محلية ودولية" },
      { id: 3, title: "10+", description: "ورش عمل وأنشطة" },
      { id: 4, title: "10+", description: "شراكات محلية ودولية" },
    ],
  },
  {
    id: 5,
    image: "/activetes/icon1.png",
    title: "التدريب و التوظيف OJT 2",
     description:
      "منذ تأسيس 'رافد للتنمية' عملنا بجد لنكون جزءاً أساسياً في دفع عجلة التنمية المستدامة. تركّزت جهودنا على تأهيل الكفاءات الشابة وصناعة فرص حقيقية لهم في سوق العمل، ودعم القطاع الخيري بحلول رقمية مبتكرة ساعدته على تحسين الأداء وزيادة الأثر المجتمعي. كما حرصنا على تنظيم ورش عمل ولقاءات معرفية لنشر ثقافة التطوير والابتكار، إلى جانب بناء شراكات استراتيجية محلية ودولية ساهمت في توسيع نطاق خدماتنا وتعزيز حضورنا كمؤسسة موثوقة وفاعلة في مجال التنمية",
    dataNumbers: [
      { id: 1, title: "10+", description: "ورش عمل وأنشطة" },
      { id: 2, title: "12+", description: "شراكات محلية ودولية" },
      { id: 3, title: "14+", description: "ورش عمل وأنشطة" },
      { id: 4, title: "16+", description: "شراكات محلية ودولية" },
    ],
  },
];

export const Achievements = () => {
  const [currentDataNumbers, setCurrentDataNumbers] = useState<DataNumber[]>(achievements[0].dataNumbers);

  return (
    <section className="my-40 relative">
      <div className="absolute -bottom-40 left-0">
        <Image src="/activetes/bg-left.png" alt="..." width={300} height={20} />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src="/activetes/bg-right.png" alt="..." width={300} height={20} />
      </div>

      <div className="lg:max-w-screen-lg 2xl:max-w-screen-2xl md:mx-auto mx-5 sm:mx-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
          الإنجازات
        </h1>
        <p className="text-center text-secondary my-4 sm:my-6 md:my-8 text-sm sm:text-base md:text-lg lg:text-xl">
          إنجازاتنا تعكس التزامنا بالتنمية المستدامة، وترك بصمة واضحة في المجتمع.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 achievements">
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop={true}
              slidesPerView="auto"
              spaceBetween={30}
              speed={1000}
              centeredSlides={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              effect={"cards"}
              grabCursor={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1440: { slidesPerView: 1 },
              }}
              pagination={{ el: '.swiper-pagination-achievements', clickable: true }}
              onSlideChange={(swiper) => {
                const slideIndex = swiper.realIndex;
                setCurrentDataNumbers(achievements[slideIndex].dataNumbers);
              }}
              className="w-70 lg:w-90 2xl:w-120"
            >
              {achievements.map((item) => (
                <SwiperSlide key={item.id} className="shadow-xl">
                  <Card className="min-h-120 bg-white border border-secondary/15 shadow-2xl transition-all duration-300 group hover:scale-105 animate-fade-in px-5 overflow-hidden relative py-5 flex items-center rounded-none">
                    <p className="text-secondary leading-6 sm:leading-7 md:leading-8 lg:leading-9 overflow-hidden text-sm sm:text-base md:text-lg text-justify font-light">
                      {item.description}
                    </p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-achievements mt-10 text-center"></div>

            <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
              <div className="swiper-button-prev pointer-events-auto flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-info/70 text-primary shadow-xl hover:scale-110 transition-all duration-300 -left-5">
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="swiper-button-next pointer-events-auto flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-info/70 text-primary shadow-xl hover:scale-110 transition-all duration-300 -right-5">
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 grid grid-cols-2 gap-5 sm:gap-10">
            {currentDataNumbers.map((item) => (
              <Card
                key={item.id}
                className="bg-white border border-secondary/15 text-center rounded-md transition-all duration-300 group hover:scale-105 animate-fade-in px-4 py-6 shadow"
              >
                <h1 className="text-center text-primary font-doto1 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {item.title}
                </h1>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
