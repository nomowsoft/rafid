"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                alert("تم إرسال الرسالة بنجاح");
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert("حدث خطأ أثناء الإرسال");
            }
        } catch (error) {
            console.error(error);
            alert("تعذر الاتصال بالخادم");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <section className=" relative md:mb-30">
            <div className="absolute sm:w-40 md:w-60 lg:w-200 h-40 sm:h-60 md:h-200 bg-primary/13 blur-3xl animate-float -top-80 rounded-full -right-20" />

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid lg:grid-cols-1 gap-12">
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-primary">الاسم</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="الاسم"
                                            className="border border-info py-6 rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-primary">رقم الجوال</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="77xxxxxx"
                                            className="border border-info py-6 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-primary">البريد الإلكتروني</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="info@gmail.com"
                                        className="border border-info py-6 rounded-xl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-primary">الرسالة</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="الرسالة"
                                        className="resize-none border border-info py-6 rounded-xl"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <Button type="submit" size="lg" className="w-full md:w-auto text-white text-xl">
                                        ارسال
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
