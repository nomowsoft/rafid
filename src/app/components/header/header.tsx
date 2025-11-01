"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="top-0 sticky left-0 w-full z-50  backdrop-blur-md">
      <div className="flex items-center justify-between px-8 bg-gradient-to-l from-white/90 to-transparent md:mt-8 max-w-screen-2xl mx-auto  md:rounded-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/hesder/logo.png" alt="logo" width={120} height={40} />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-primary hover:text-primary/70 transition">
            الرئيسية
          </Link>
          <Link href="/who_are_we" className="text-primary hover:text-primary/70 transition">
            من نحن
          </Link>
          <Link href="#" className="text-primary hover:text-primary/70 transition">
            الخدمات
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact_us"
            className="bg-primary text-white py-2 px-5 rounded-3xl hover:bg-primary/90 transition"
          >
            تواصل معنا
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="inset-0 z-[999] h-screen flex justify-center bg-slate-900/60 backdrop-blur-sm lg:hidden mb-20">
          <nav className="py-4">
            <div className="mt-4 text-center">
              <Link href="/" className="text-white" onClick={() => setOpen(false)}>
                الرئيسية
              </Link>
            </div>
            <div className="mt-10 text-center">
              <Link href="/who_are_we" className="text-white" onClick={() => setOpen(false)}>
                من نحن
              </Link>
            </div>
            <div className="mt-10 text-center">
              <Link href="#" className="text-white" onClick={() => setOpen(false)}>
                الخدمات
              </Link>
            </div>
            <div className="mt-10">
              <Link
                href="/contact_us"
                className="bg-primary text-white py-2 px-5 rounded-3xl"
                onClick={() => setOpen(false)}
              >
                تواصل معنا
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}