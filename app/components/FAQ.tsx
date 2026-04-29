"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
];

const faqs = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "We offer customized training programs across domains like AI, Data Science, Leadership, and more.",
    },
    {
      q: "What domain specializations are available?",
      a: "We cover IT, Finance, Healthcare, Retail, and emerging technologies.",
    },
  ],
  "About the Delivery": [
    {
      q: "How are the programs delivered?",
      a: "Programs are delivered online, offline, and hybrid formats.",
    },
  ],
  Miscellaneous: [
    {
      q: "Do you provide certification?",
      a: "Yes, we provide industry-recognized certifications.",
    },
  ],
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 max-w-7xl mx-auto font-sans">
      
      {/* Heading - Left Aligned to match the image */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* LEFT TABS */}
        <div className="flex flex-col gap-6 md:w-1/4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenIndex(0);
              }}
              className={`px-8 py-4 rounded-lg text-center font-bold text-lg transition-all duration-200 border
                ${
                  activeTab === cat
                    ? "bg-white text-blue-600 border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.1)] scale-105 z-10"
                    : "bg-white text-gray-500 border-gray-300 hover:border-gray-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RIGHT FAQ */}
        <div className="flex-1">
          <div className="space-y-10">
            {faqs[activeTab as keyof typeof faqs].map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer select-none"
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              >
                {/* Question */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className={`font-bold text-lg md:text-xl transition-colors ${openIndex === i ? 'text-blue-600' : 'text-slate-800'}`}>
                    {item.q}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 mt-1 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                <div 
                   className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                   }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-20">
        <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors">
          Enquire Now
        </button>
      </div>
    </section>
  );
}