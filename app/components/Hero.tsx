import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#eef2f7] shadow-sm rounded-3xl mx-4 sm:mx-6 mt-8 p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center md:text-left">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
          Next-Gen{" "}
          <span className="text-blue-600">Expertise</span>
          <br />
          For Your{" "}
          <span className="text-blue-600">Enterprise</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl font-medium text-gray-700">
          Cultivate high-performance <br />
          teams through expert learning.
        </p>

        {/* FEATURES */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8 text-gray-800 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600 w-5 h-5" />
            <span>Tailored Solutions</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600 w-5 h-5" />
            <span>Industry Insights</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600 w-5 h-5" />
            <span>Expert Guidance</span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Enquire Now
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-[500px] flex justify-center">
        <Image
          src="/hero.webp"
          alt="hero"
          width={600}
          height={400}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
}