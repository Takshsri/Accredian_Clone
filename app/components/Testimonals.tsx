"use client";

import { useState } from "react";
import Image from "next/image";
import { Headphones } from "lucide-react"; // Using a clean icon for the CTA

const testimonials = [
  {
    logo: "/logo5.png", // Replace with your actual path
    text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
  },
  {
    logo: "/logo6.png", // Replace with your actual path
    text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-6 bg-white font-sans">
      
      {/* Heading - Matching exact weights */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-10 shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.01]"
          >
            <div className="h-12 w-32 relative mb-8">
              <Image
                src={t.logo}
                alt="Partner Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-gray-600 text-lg leading-relaxed italic">
              {t.text}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {[0, 1].map((dot) => (
          <button
            key={dot}
            onClick={() => setIndex(dot)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === dot ? "bg-blue-600 w-6" : "bg-blue-200"
            }`}
            aria-label={`Go to slide ${dot + 1}`}
          />
        ))}
      </div>

      {/* CTA BOX - Exactly like the image */}
      <div className="mt-24 max-w-6xl mx-auto bg-[#1A6BFF] text-white rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200">
        
        <div className="flex items-center gap-6">
          {/* Icon Box */}
          <div className="bg-white/20 p-4 rounded-2xl">
            <Headphones className="w-8 h-8 text-white" />
          </div>

          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              Want to Learn More About Our Training Solutions?
            </h3>
            <p className="text-blue-50 text-base md:text-lg opacity-90 mt-1">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-[#1A6BFF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
          Contact Us →
        </button>
      </div>
    </section>
  );
}