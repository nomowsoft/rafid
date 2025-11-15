import { Card } from "../ui/card";
import Image from "next/image";


export const VisionMessage = () => {
    return (
        <section className="lg:max-w-screen-lg 2xl:lg:max-w-screen-2xl md:mx-auto mx-4 sm:mx-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in text-center overflow-hidden relative">
                    <div className="absolute top-0">
                        <Image src="/vision_message/Vector.png" alt="..." width={90} height={20} />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <Image src="/vision_message/Vector2.png" alt="..." width={90} height={20} />
                    </div>

                    <div className="flex justify-center items-center pt-12 mb-4 lg:px-20">
                        <Image src="/vision_message/lamp.png" alt="" width={40} height={40} className="sm:w-10 sm:h-10" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2">الرؤية</h3>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-secondary px-5 md:px-12 pb-12">
                        روّاد في تمكين الشباب وتطوير المنظمات. «منظمات المجتمع المدني»
                    </p>
                </Card>

                <Card className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in text-center overflow-hidden relative">
                    <div className="absolute top-0">
                        <Image src="/vision_message/Vector.png" alt="..." width={90} height={20} />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <Image src="/vision_message/Vector2.png" alt="..." width={90} height={20} />
                    </div>

                    <div className="flex justify-center items-center pt-12 mb-4 lg:px-20">
                        <Image src="/vision_message/send_message.png" alt="" width={40} height={40} className="sm:w-10 sm:h-10" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2">الرسالة</h3>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-secondary px-5 md:px-12  pb-12">
                        نُمكّن الشباب بمهارات تؤهلهم لسوق العمل، ونعزز كفاءة المنظمات المجتمعية لضمان استدامة أثرها في خدمة المجتمع.
                    </p>
                </Card>
            </div>
        </section>

    )
}
