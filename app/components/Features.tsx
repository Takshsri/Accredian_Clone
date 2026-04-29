import Image from "next/image";
import { Feature, features } from "../lib/data";

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 px-4 md:px-10 max-w-6xl mx-auto"
    >
      <div className="bg-blue-600 rounded-2xl text-white py-10 px-6 md:px-10 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-between items-center md:items-start">
          
          <div className="space-y-2 mb-4 text-center md:text-left">
            <p className="text-sm md:text-base opacity-90">
              Who Should Join?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Strategic Skill Enhancement
            </h2>
          </div>

          {/* IMAGE */}
          <div className="relative w-full max-w-[260px] h-52 md:h-60">
            <Image
              src="/imageProfile.png"
              alt="Professionals"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-2"
            >
              <f.icon className="w-9 h-9" />

              <h3 className="text-lg font-semibold">
                {f.title}
              </h3>

              <p className="text-blue-100 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}