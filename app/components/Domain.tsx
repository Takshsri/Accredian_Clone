import { Lightbulb, Brain, Users, BarChart, Settings, Globe, CreditCard } from "lucide-react";

const data = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: BarChart },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe },
  { title: "Fintech Innovation Lab", icon: CreditCard },
];

export default function Domain() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* Heading matching the image style */}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
        Our <span className="text-blue-600">Domain Expertise</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        <span className="text-blue-600 font-medium">Specialized Programs</span> Designed to Fuel Innovation
      </p>

      {/* Grid container with custom logic for the 7th item */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.slice(0, 6).map((d, i) => {
            const Icon = d.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="text-blue-600 w-12 h-12 mb-6 stroke-[1.5]" />
                <p className="text-xl font-bold text-slate-800">{d.title}</p>
              </div>
            );
          })}
        </div>

        {/* Centered bottom row for the 7th item */}
        <div className="mt-8 flex justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center transition-all hover:shadow-xl hover:-translate-y-1">
              <CreditCard className="text-blue-600 w-12 h-12 mb-6 stroke-[1.5]" />
              <p className="text-xl font-bold text-slate-800">
                {data[6].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}