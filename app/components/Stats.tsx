"use client";

import React from "react";

export default function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      value: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      value: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section
      id="stats"
      className="mx-4 sm:mx-6 mt-12 sm:mt-16 rounded-3xl bg-[#eef2f7] p-8 sm:p-12 md:p-16 text-center"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
        Our <span className="text-blue-600">Track Record</span>
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-gray-600 text-base sm:text-lg">
        The Numbers Behind{" "}
        <span className="text-blue-600 font-semibold">
          Our Success
        </span>
      </p>

      {/* Stats Row */}
      <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            
            {/* STAT ITEM */}
            <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-6">
              
              {/* Number Pill */}
              <div className="bg-blue-100 text-blue-600 px-5 sm:px-6 py-2 sm:py-3 rounded-full text-xl sm:text-2xl font-bold">
                {stat.value}
              </div>

              {/* Label */}
              <p className="mt-4 sm:mt-6 max-w-xs text-gray-800 text-sm sm:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>

            {/* Divider (desktop only) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-16 sm:h-20 w-px bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}