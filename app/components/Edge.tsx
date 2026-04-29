"use client";

import React from "react";
import {
  Lightbulb,
  Users,
  Settings,
  Globe,
  Repeat,
  Target,
  Box,
  ChevronRight,
} from "lucide-react";

interface EdgeItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "top" | "bottom";
}

const edgeData: EdgeItem[] = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb size={26} />,
    position: "top",
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: <Users size={26} />,
    position: "bottom",
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: <Settings size={26} />,
    position: "top",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: <Globe size={26} />,
    position: "bottom",
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: <Repeat size={26} />,
    position: "top",
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: <Target size={26} />,
    position: "bottom",
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: <Box size={26} />,
    position: "top",
  },
];

// How tall the label area is (px)
const LABEL_AREA = 160;
// How long the vertical connector line is (px)
const CONNECTOR = 48;

export default function AccredianEdge() {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-325 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-slate-500">
          Key Aspects of{" "}
          <span className="text-blue-600 font-semibold">Our Strategic Training</span>
        </p>

        {/* ── Desktop Timeline ── */}
        <div
          className="hidden md:flex items-center justify-between relative"
          style={{ marginTop: LABEL_AREA, marginBottom: LABEL_AREA }}
        >
          {/* Dashed centre line */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-slate-200 z-0"
            style={{ top: "50%" }}
          />

          {edgeData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="relative flex flex-col items-center z-10 flex-1">
                {/* TOP LABEL */}
                {item.position === "top" && (
                  <div
                    className="absolute left-1/2 w-44 text-left"
                    style={{
                      bottom: `calc(50% + ${CONNECTOR + 2}px)`,
                      transform: "translateX(-14px)",
                    }}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <span
                        className="mt-0.75 shrink-0 w-2.5 h-2.5 rounded-full bg-blue-600"
                        style={{ boxShadow: "0 0 8px rgba(37,99,235,0.5)" }}
                      />
                      <h3 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11.5px] text-slate-500 leading-relaxed pl-4.5">
                      {item.description}
                    </p>
                  </div>
                )}

                {/* Vertical connector TOP → circle */}
                {item.position === "top" && (
                  <div
                    className="absolute left-1/2 z-10"
                    style={{
                      bottom: "calc(50% + 2px)",
                      width: "1.5px",
                      height: CONNECTOR,
                      marginLeft: "-0.75px",
                      background:
                        "linear-gradient(to bottom, rgba(37,99,235,0.4), transparent)",
                    }}
                  />
                )}

                {/* Triple-ring icon */}
                <div className="w-29 h-29 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center bg-white transition-transform duration-500 hover:scale-110">
                  <div className="w-22.5 h-22.5 rounded-full border-[3px] border-blue-100 flex items-center justify-center bg-white shadow-md">
                    <div className="w-16.5 h-16.5 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-300/40">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Vertical connector circle → BOTTOM */}
                {item.position === "bottom" && (
                  <div
                    className="absolute left-1/2 z-10"
                    style={{
                      top: "calc(50% + 2px)",
                      width: "1.5px",
                      height: CONNECTOR,
                      marginLeft: "-0.75px",
                      background:
                        "linear-gradient(to top, rgba(37,99,235,0.4), transparent)",
                    }}
                  />
                )}

                {/* BOTTOM LABEL */}
                {item.position === "bottom" && (
                  <div
                    className="absolute left-1/2 w-44 text-left"
                    style={{
                      top: `calc(50% + ${CONNECTOR + 2}px)`,
                      transform: "translateX(-14px)",
                    }}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <span
                        className="mt-0.75 shrink-0 w-2.5 h-2.5 rounded-full bg-blue-600"
                        style={{ boxShadow: "0 0 8px rgba(37,99,235,0.5)" }}
                      />
                      <h3 className="text-[13px] font-extrabold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11.5px] text-slate-500 leading-relaxed pl-4.5">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Chevron between items */}
              {index !== edgeData.length - 1 && (
                <div className="z-10 shrink-0 text-slate-300">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden mt-10 flex flex-col gap-7">
          {edgeData.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center bg-white">
                <div className="w-10 h-10 rounded-full border-2 border-blue-100 flex items-center justify-center bg-white shadow">
                  <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {/* Fixed the overload error by casting the props object to any */}
                    {React.cloneElement(item.icon as React.ReactElement, { size: 16 } as any)}
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}