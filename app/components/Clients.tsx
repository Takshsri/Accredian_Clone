import Image from "next/image";

export default function Clients() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];

  return (
    <section id="clients" className="py-16 px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Our <span className="text-blue-600">Proven Partnerships</span>
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-slate-600 text-base sm:text-lg">
        Successful Collaborations With the Industry’s Best
      </p>

      {/* Logos Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 sm:p-6 h-24 sm:h-28 rounded-xl bg-slate-50 border border-slate-100"
          >
            <Image
              src={logo}
              alt="Client logo"
              width={120}
              height={60}
              className="
                object-contain
                h-10 sm:h-12 w-auto
                opacity-70 hover:opacity-100
                transition duration-300
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}