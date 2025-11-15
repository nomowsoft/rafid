"use client";
import { Card } from "../ui/card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

type Partners = {
    id: number;
    image: string;
}
const partners: Partners[] = [
    {
        id: 1,
        image: "/values/icon0.png",

    },
    {
        id: 2,
        image: "/values/icon1.png",
    },
    {
        id: 3,
        image: "/values/icon2.png",
    },
    {
        id: 4,
        image: "/values/icon3.png",
    },
    {
        id: 5,
        image: "/values/icon4.png",
    },
    {
        id: 6,
        image: "/values/icon4.png",
    },
    {
        id: 7,
        image: "/values/icon4.png",
    },
    {
        id: 8,
        image: "/values/icon4.png",
    },
    {
        id: 9,
        image: "/values/icon4.png",
    },
]
export const Partners = () => {
    return (
        <section className="bg-info/20 my-32 py-20">
            <div className="lg:max-w-screen-lg 2xl:lg:max-w-screen-2xl md:mx-auto mx-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                    شركاؤنا
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-secondary my-8 sm:my-10">
                    شركاؤنا هم سر نجاحنا، وبدعمهم نوسّع أثرنا التنموي.
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
                        1024: { slidesPerView: 5 },
                        1440: { slidesPerView: 5 },
                    }}
                    pagination={{
                        el: '.swiper-pagination-partner',
                        clickable: true,
                    }}
                >
                    {partners.map((item) => {
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
                                    </Card>
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
                <div className="swiper-pagination-partner mt-10 sm:mt-20 text-center"></div>
            </div>
        </section>
    )
}
