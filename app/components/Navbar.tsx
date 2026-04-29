"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  "home",
  "stats",
  "clients",
  "edge",
  "cat",
  "how",
  "faq",
  "testimonials",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative block md:inline cursor-pointer ${
      active === id ? "text-blue-600" : "text-gray-700"
    } 
    after:block after:h-[2px] after:bg-blue-600 
    after:transition-transform after:duration-300 after:origin-left
    ${
      active === id
        ? "after:scale-x-100"
        : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        
        <div className="flex flex-col items-start leading-none">

  <h1 className="text-[28px] font-extrabold text-[#1A6BFF] tracking-tighter font-sans">
    accredian
  </h1>
  
  <span className="text-[9px] font-medium text-gray-500 tracking-[0.2em] mt-3 uppercase">
    credentials that matter
  </span>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-xl font-bold">
          {sections.map((id) => (
            <Link key={id} href={`#${id}`} className={linkClass(id)}>
              {id === "home" && "Home"}
              {id === "stats" && "Stats"}
              {id === "clients" && "Clients"}
              {id === "edge" && "Accredian Edge"}
              {id === "cat" && "CAT"}
              {id === "how" && "How It Works"}
              {id === "faq" && "FAQs"}
              {id === "testimonials" && "Testimonials"}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 font-medium text-lg">
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={linkClass(id)}
              onClick={() => setOpen(false)}
            >
              {id === "home" && "Home"}
              {id === "stats" && "Stats"}
              {id === "clients" && "Clients"}
              {id === "edge" && "Accredian Edge"}
              {id === "cat" && "CAT"}
              {id === "how" && "How It Works"}
              {id === "faq" && "FAQs"}
              {id === "testimonials" && "Testimonials"}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}