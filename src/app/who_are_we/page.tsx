import { Card } from "../components/ui/card";

type Values = {
    id: number;
    description: string
}
const values: Values[] = [
    {
        id: 1,
        description: "تمكين القطاع الخيري إلى التحول الرقمي من خلال تقديم الحلول التقنية الحديثة."
    },
    {
        id: 2,
        description: "تطوير كادر المؤسسة واستقطاب الخبرات والمحافظة عليها لتعزيز الأداء المؤسسي."
    },
    {
        id: 3,
        description: "تقديم الاستشارات الإدارية والتقنية للقطاع التنموي لتعزيز الكفاءة المؤسسية."
    },
    {
        id: 4,
        description: "بناء شراكات فاعلة ومثمرة مع الجهات ذات الصلة محليًا ودوليًا لتحقيق التنمية المستدامة."
    },
    {
        id: 5,
        description: "تأهيل خريجي الجامعات والكليات والمعاهد التقنية ورفع مستوى مهاراتهم العملية."
    },
]
export default function WhoAreWe() {
    return (
        <section className="py-20 relative md:mb-30">
            <div className="absolute sm:w-40 md:w-60 lg:w-200 h-40 sm:h-60 md:h-200 bg-primary/13 blur-3xl animate-float -top-80 rounded-full -right-20" />
            <div className="md:max-w-screen- lg:max-w-screen-xl 2xl:lg:max-w-screen-2xl md:mx-auto mx-20">
                <h1 className="text-5xl text-center">
                    الأهداف الاستراتيجية
                </h1>
                <p className="text-center text-secondary my-10">
                    تسعى &#34;رافد للتنمية&#34; إلى تحقيق مجموعة من الأهداف الاستراتيجية التي تخدم رؤيتها ورسالتها:
                </p>
                <div className="flex flex-wrap justify-center gap-5 md:gap-10">
                    {values.map((item) => (
                        <div
                            key={item.id}
                            className="w-full lg:w-1/4 md:w-1/3 px-2"
                        >
                            <Card className="bg-card/50 border border-secondary/15 rounded-2xl transition-all duration-300 group hover:scale-105 animate-fade-in relative bg-white py-3">
                                <div className="my-5 px-10">
                                    <span className="bg-info text-primary rounded-full w-10 h-10 flex items-center justify-center">
                                        {item.id}
                                    </span>
                                </div>
                                <p className="text-muted-foreground px-5 md:px-10 text-secondary">
                                    {item.description}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
