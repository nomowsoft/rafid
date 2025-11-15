import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <section>
      <hr className="text-primary/10" /> 
      <div className="relative overflow-hidden">
        <div className="absolute top-35 left-0">
          <Image src="/footer/bg-left.png" alt="..." width={250} height={20} />
        </div>
        <div className="absolute top-25 left-0">
          <Image src="/footer/Vector.png" alt="..." width={250} height={20} />
        </div>
        <div className="absolute top-20 right-0">
          <Image src="/footer/bg-right.png" alt="..." width={250} height={20} />
        </div>
        <div className="lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl lg:mx-auto mx-10 mt-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center">
            <div>
              <Image src="/footer/logo.png" alt="..." width={150} height={20} />
              <p className="text-secondary">
                هي منظمة مدنية لا تهدف إلى الربح التجاري، تأسست بتاريخ 11 مارس 2025م بموجب ترخيص رقم 704 الصادر عن وزارة الشؤون الاجتماعية والعمل.
              </p>
              <div className="flex gap-4 mt-5">
                <Link href="#">
                  <div className="rounded-full bg-white shadow-xl p-4">
                    <Image src="/footer/linkedin.png" alt="..." width={15} height={20} />
                  </div>
                </Link>
                <Link href="#">
                  <div className="rounded-full bg-white shadow-xl p-4">
                    <Image src="/footer/twitter.png" alt="..." width={15} height={20} />
                  </div>
                </Link>
                <Link href="#">
                  <div className="rounded-full bg-white shadow-xl p-4">
                    <Image src="/footer/instagram.png" alt="..." width={15} height={20} />
                  </div>
                </Link>
                <Link href="#">
                  <div className="rounded-full bg-white shadow-xl p-4">
                    <Image src="/footer/facebook.png" alt="..." width={15} height={20} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex lg:justify-center">
              <div>
                <h1 className="text-primary">الروابط: </h1>
                <div className="flex flex-col">
                  <Link className="text-secondary mt-5 hover:text-primary" href="/">الرئسية</Link>
                  <Link className="text-secondary mt-5 hover:text-primary" href="/">الخدمات</Link>
                  <Link className="text-secondary mt-5 hover:text-primary" href="/">مكتبة المعرفة</Link>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-center">
              <div>
                <h1 className="text-primary">تواصل معنا</h1>
                <div className="flex flex-col">
                  <Link className="text-secondary mt-5 hover:text-primary" href="#">
                    <div className="flex items-center">
                      <div className="rounded-full bg-info shadow-xl p-2">
                        <Image src="/footer/icon_c1.png" alt="..." width={15} height={20} />
                      </div>
                      <div className="mx-2 mt-1">
                        <span dir="ltr" className="text-secondary">+967 783881666</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="text-secondary mt-5 hover:text-primary" href="#">
                    <div className="flex items-center">
                      <div className="rounded-full bg-info shadow-xl p-2">
                        <Image src="/footer/icon_c2.png" alt="..." width={15} height={20} />
                      </div>
                      <div className="mx-2 mt-1">
                        <span dir="ltr" className="text-secondary">info@rafde.org</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="text-secondary mt-5 hover:text-primary" href="#">
                    <div className="flex items-center">
                      <div className="rounded-full bg-info shadow-xl p-2">
                        <Image src="/footer/icon_c3.png" alt="..." width={15} height={20} />
                      </div>
                      <div className="mx-2 mt-1">
                        <span dir="ltr" className="text-secondary">
                          حضرموت - سيؤن - شارع الجزائر - فوق بنك الأمل - الدور الأول
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-10 text-info" />
          <h1 className="my-10 text-center text-secondary">
            © 2025 جميع الحقوق محفوظة لمؤسسة رافد للتنمية
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Footer