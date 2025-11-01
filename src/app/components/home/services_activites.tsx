"use client";
import { Card } from "../ui/card";
import Image from "next/image";

type ActivetesServicve = {
    id: number;
    image: string;
    title: string;
    description: string
}
const activetesservicve: ActivetesServicve[] = [
    {
        id: 1,
        image: "/activetes/icon1.png",
        title: "التدريب و التوظيف OJT",
        description: "مساعدة الشباب على ايجاد فرص عمل محلية او من خلال منصة العمل الحر."
    },
    {
        id: 2,
        image: "/activetes/icon2.png",
        title: "برامج التدريب والتأهيل",
        description: "تأهيل الشباب والخريجين بالمهارات العملية لسوق العمل."
    },
    {
        id: 3,
        image: "/activetes/icon3.png",
        title: "تمكين المؤسسات الخيرية",
        description: "بناء أنظمة إدارية وتقنية حديثة تعزز الاستدامة."
    },
    {
        id: 4,
        image: "/activetes/icon4.png",
        title: "بناء الشراكات",
        description: "تعاون محلي ودولي مع منظمات وجهات لتحقيق أثر أكبر."
    },
    {
        id: 5,
        image: "/activetes/icon5.png",
        title: "المشاريع التنموية",
        description: "تنفيذ مبادرات مجتمعية في التقنية وريادة الأعمال."
    },
    {
        id: 6,
        image: "/activetes/icon6.png",
        title: "الاستشارات الإدارية والتقنية",
        description: "نساعد المؤسسات على تحسين الكفاءة والتحول الرقمي."
    },
]
export const ServicesActivites = () => {
    return (
        <section className="my-32 relative px-4 sm:px-6 lg:px-8">
            <div className="absolute -bottom-40 left-0">
                <Image src="/activetes/bg-left.png" alt="..." width={300} height={20} />
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src="/activetes/bg-right.png" alt="..." width={300} height={20} />
            </div>
            <div className="max-w-[90rem] mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
                    الأنشطة والخدمات
                </h1>
                <p className="text-center text-secondary my-6 sm:my-10 text-sm sm:text-base md:text-lg">
                    نقدم حلول واستشارات متخصصة، مع برامج تدريبية وتنموية تعزز قدرات الأفراد والمؤسسات.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {activetesservicve.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in p-4 sm:p-5 overflow-hidden bg-white"
                        >
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="relative w-20 h-20 flex-shrink-0">
                                    <Image
                                        src="/activetes/bg_icon.png"
                                        alt="icon background"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute right-4 top-4 w-12 h-12">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="px-2 pt-2 mb-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-primary mt-2">{item.title}</h3>
                                    </div>
                                    <p className="text-sm sm:text-base text-secondary px-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

