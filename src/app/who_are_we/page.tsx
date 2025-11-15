"use client";
import { useEffect, useState, useRef } from "react";
import { Card } from "../components/ui/card";

type Values = {
  id: number;
  description: string;
};

const values: Values[] = [
  {
    id: 1,
    description:
      "تمكين الشباب وتأهيلهم لمواكبة سوق العمل.",
  },
  {
    id: 2,
    description:
      "تمكين القطاع الخيري إلى التحول الرقمي.",
  },
  {
    id: 3,
    description:
      "تقديم الاستشارات الإدارية والتقنية.",
  },
  {
    id: 4,
    description:
      "تطوير كادر المؤسسة واستقطاب الخبرات.",
  },
  {
    id: 5,
    description:
      "بناء شراكات فاعلة ومثمرة مع الجهات ذات الصلة.",
  },
];

export default function WhoAreWe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const sequence = [0, 1, 2, 3, 4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sequence.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [sequence.length]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const currentCard = cardRefs.current[activeIndex];
      if (currentCard) {
        currentCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 2000);
    return () => clearInterval(scrollInterval);
  }, [activeIndex]);

  return (
    <section className="py-20 relative md:mb-30">
      <div className="absolute sm:w-40 md:w-60 lg:w-200 h-40 sm:h-60 md:h-200 bg-primary/13 blur-3xl animate-float -top-80 rounded-full -right-20" />

      <div className="md:max-w-screen-lg lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          الأهداف الاستراتيجية
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-secondary my-8 sm:my-10">
          تسعى &#34;رافد للتنمية&#34; إلى تحقيق مجموعة من الأهداف الاستراتيجية التي
          تخدم رؤيتها ورسالتها:
        </p>

        <div className="md:flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6 relative hidden">
          {[values[0], values[2], values[4]].map((item, index) => {
            const realIndex = [0, 2, 4][index];
            return (
              <>
                <div
                  key={item.id}
                  className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(31%-1rem)] relative"
                >
                  <Card className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in relative bg-white py-3">
                    <div className="my-5 px-10">
                      <span className="bg-info text-primary rounded-full w-10 h-10 flex items-center justify-center">
                        {item.id}
                      </span>
                    </div>
                    <p className="text-muted-foreground px-5 md:h-12 lg:h-10 md:px-5 text-secondary">
                      {item.description}
                    </p>
                  </Card>
                  <div
                    className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-8 transition-all duration-700 ${
                      activeIndex >= realIndex ? "bg-primary" : "bg-primary/20"
                    }`}
                    style={{ top: "100%" }}
                  ></div>
                </div>
              </>
            );
          })}

          <div
            className="hidden md:block absolute h-0.5 bg-primary/20"
            style={{
              top: "calc(100% + 2rem)",
              right: 0,
              width: "100%",
            }}
          ></div>

          <div
            className="hidden md:block absolute h-0.5 bg-primary transition-all duration-1000"
            style={{
              top: "calc(100% + 2rem)",
              right: 0,
              width: `${((activeIndex + 1) / sequence.length) * 100}%`,
            }}
          ></div>
        </div>

        <div
          className="md:flex flex-wrap justify-center gap-4 md:gap-6 relative hidden"
          style={{ marginTop: "4rem" }}
        >
          {[values[1], values[3]].map((item, index) => {
            const realIndex = [1, 3][index];
            return (
              <div
                key={item.id}
                className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(31%-1rem)] relative"
              >
                <div
                  className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-8 transition-all duration-700 ${
                    activeIndex >= realIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                  style={{ bottom: "100%" }}
                ></div>

                <Card className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in relative bg-white py-3">
                  <div className="my-5 px-10">
                    <span className="bg-info text-primary rounded-full w-10 h-10 flex items-center justify-center">
                      {item.id}
                    </span>
                  </div>
                  <p className="text-muted-foreground md:h-12 lg:h-10 px-5 md:px-5 text-secondary">
                    {item.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:hidden gap-4 relative">
          {values.map((item, index) => (
            <div key={item.id} ref={(el) => {if (el) cardRefs.current[index] = el;}} className="relative">
              <Card className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in relative bg-white py-3">
                <div className="my-5 px-5">
                  <span className="bg-info text-primary rounded-full w-10 h-10 flex items-center justify-center">
                    {item.id}
                  </span>
                  <p className="text-secondary mt-2">{item.description}</p>
                </div>
              </Card>

              {/* {activeIndex > index && (
                <div className="flex justify-center -mt-2">
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary animate-bounce"></div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
