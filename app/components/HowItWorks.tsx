import { BarChart, Monitor, PlayCircle } from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: BarChart,
  },
  {
    id: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: Monitor,
  },
  {
    id: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: PlayCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        How We <span className="text-blue-600">Deliver Results</span> That Matter?
      </h2>

      <p className="mt-3 text-gray-600 text-base md:text-lg">
        A Structured Three-Step Approach to{" "}
        <span className="text-blue-600 font-medium">Skill Development</span>
      </p>

      {/* Cards Container - Reduced max-width to pull boxes closer together */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative bg-[#ebf4ff] rounded-xl p-6 pt-10 shadow-md border border-blue-100 transition-all hover:shadow-lg"
          >
            {/* Canonical Tailwind classes to fix IntelliSense errors */}
            <div className="absolute -left-1.5 top-1/4 bottom-1/4 w-1.5 bg-blue-600 rounded-full" />
            <div className="absolute -right-1.5 top-1/4 bottom-1/4 w-1.5 bg-blue-600 rounded-full" />

            {/* Step Number - Smaller badge */}
            <div className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold shadow-sm">
              {step.id}
            </div>

            {/* Icon Circle - Reduced from p-5/w-8 to p-4/w-7 */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full text-white shadow-lg shadow-blue-400/30">
                <step.icon className="w-7 h-7" strokeWidth={2.5} />
              </div>
            </div>

            {/* Title - Smaller font */}
            <h3 className="text-lg font-bold text-slate-800 mb-3">
              {step.title}
            </h3>

            {/* Description - Compact text */}
            <p className="text-gray-600 text-sm leading-snug">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}