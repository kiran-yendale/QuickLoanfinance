"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/NavLogo.jpeg"
              alt="Quick Loan Finance"
              width={130}
              height={40}
              className="object-contain md:w-[190px]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link href="/" className="hover:text-blue-900">HOME</Link>
            <Link href="/about" className="hover:text-blue-900">ABOUT US</Link>
            <Link href="#">APPLY NOW</Link>
            <Link href="#">SCHEMES</Link>
            <Link href="#">FAQS</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP CALL */}
            <button className="hidden md:block bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition">
              CALL US : 011-12345678
            </button>

            {/* MOBILE CALL (Compact but full number) */}
            <a
              href="tel:01112345678"
              className="md:hidden bg-blue-900 text-white px-3 py-1.5 rounded-full text-[11px] font-semibold"
            >
              011-12345678
            </a>

            {/* MENU BUTTON */}
            <button
              className="md:hidden text-blue-900"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDE DRAWER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <span className="font-semibold text-blue-900">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 space-y-6 text-sm font-semibold text-gray-700">
          <Link href="/" onClick={()=>setOpen(false)}>HOME</Link>
          <Link href="/about" onClick={()=>setOpen(false)}>ABOUT US</Link>
          <Link href="#" onClick={()=>setOpen(false)}>APPLY NOW</Link>
          <Link href="#" onClick={()=>setOpen(false)}>SCHEMES</Link>
          <Link href="#" onClick={()=>setOpen(false)}>FAQS</Link>
        </div>
      </div>
    </>
  );
}