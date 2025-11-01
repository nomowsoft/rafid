"use client";
import { Card } from "../ui/card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

type Values = {
    id: number;
    image: string;
    title: string;
    description: string
}
const values: Values[] = [
    {
        id: 1,
        image: "/values/icon0.png",
        title: "الابتكار",
        description: "تقديم حلول إبداعية لتلبية احتياجات المجتمع."
    },
    {
        id: 2,
        image: "/values/icon1.png",
        title: "النزاهة",
        description: "العمل بشفافية ومصداقية في جميع التعاملات."
    },
    {
        id: 3,
        image: "/values/icon2.png",
        title: "التميز",
        description: "الالتزام بتقديم خدمات ذات جودة عالية."
    },
    {
        id: 4,
        image: "/values/icon3.png",
        title: "التعاون",
        description: "بناء شراكات استراتيجية لتحقيق الأهداف المشتركة."
    },
    {
        id: 5,
        image: "/values/icon4.png",
        title: "التمكين",
        description: "تعزيز قدرات الأفراد والمؤسسات لتطوير الأداء."
    },
]
export const Values = () => {
    return (
        <section className="bg-info/20 my-32 py-20">
            <div className="lg:max-w-screen-lg 2xl:lg:max-w-screen-2xl md:mx-auto mx-20">
                <h1 className="text-5xl text-center">
                    القيم
                </h1>
                <p className="text-center text-secondary my-10">
                    تعتمد &#34;رافد للتنمية&#34; على مجموعة من القيم الأساسية التي تشكل أساس عملها وتوجهاتها الاستراتيجية
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    speed={1000}
                    centeredSlides={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: '.swiper-pagination-values',
                        clickable: true,
                    }}
                >
                    {values.map((item) => {
                        return (
                            <>
                                <SwiperSlide key={item.id}>
                                    <Card 
                                        className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in overflow-hidden relative bg-white"
                                    >
                                        <div className="mt-10 px-10">
                                            <Image src="/values/Union.png" alt="..." width={90} height={20} />
                                        </div>
                                        <div className="absolute top-23 right-15.5">
                                            <Image src={item.image} alt="..." width={45} height={20} />
                                        </div>
                                        <div className="absolute bottom-0 left-0">
                                            <Image src="/vision_message/Vector2.png" alt="..." width={180} height={20} />
                                        </div>
                                        <div className="px-10 pt-2 mb-4">
                                            <h3 className="text-lg lg:text-2xl font-bold text-foreground text-primary mt-2">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground px-5 md:px-10 h-20 text-secondary">
                                            {item.description}
                                        </p>
                                    </Card>
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
                <div className="swiper-pagination-values mt-10 sm:mt-20 text-center"></div>
            </div>
        </section>
    )
}
