import { Card } from "../ui/card";
import Image from "next/image";


export const VisionMessage = () => {
    return (
        <section className="lg:max-w-screen-lg 2xl:lg:max-w-screen-2xl md:mx-auto mx-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Card
                    className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in text-center overflow-hidden relative"
                >
                    <div className="absolute top-0">
                        <Image src="/vision_message/Vector.png" alt="..." width={90} height={20} />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <Image src="/vision_message/Vector2.png" alt="..." width={90} height={20} />
                    </div>
                    
                    <div className="flex justify-center lg:px-20 pt-15 items-center mb-6">
                        <div className="flex justify-center items-center">
                            <Image src="/vision_message/lamp.png" alt="" width={40} height={10} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground text-primary mt-2">
                            الرؤية
                        </h3>
                    </div>

                    <p className="text-lg text-muted-foreground px-8 lg:px-20 xl:px-32 pb-15 text-secondary">
                        أن تكون &#34;رافد للتنمية&#34; رائدة في تمكين القطاع الخيري والتحول الرقمي،
                         ومصدرًا للخبرة في الاستشارات والتأهيل، مساهمة في تحقيق تنمية مستدامة على المستوى المحلي والدولي.
                    </p>
                </Card>
                <Card
                    className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in text-center overflow-hidden relative"
                >
                    <div className="absolute top-0">
                        <Image src="/vision_message/Vector.png" alt="..." width={90} height={20} />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <Image src="/vision_message/Vector2.png" alt="..." width={90} height={20} />
                    </div>

                    <div className="flex justify-center lg:px-32 pt-15 items-center mb-6">
                        <Image src="/vision_message/send_message.png" alt="" width={40} height={10} />
                        <h3 className="text-2xl font-bold text-foreground text-primary mt-2">
                            الرسالة
                        </h3>
                    </div>

                    <p className="text-lg text-muted-foreground px-8 lg:px-20 xl:px-32 pb-15 text-secondary">
                        نلتزم في &#34;رافد للتنمية&#34; بتمكين القطاع الخيري من خلال تقديم الاستشارات الإدارية والتقنية،
                        وتأهيل الكوادر الشابة، وبناء شراكات فاعلة، بهدف تعزيز التنمية المستدامة وتحقيق الأثر الإيجابي في المجتمع.
                    </p>
                </Card>
            </div>
        </section>
    )
}
