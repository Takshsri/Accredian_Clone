import Image from "next/image";

const courses = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    img: "/img1.png",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education",
    img: "/img2.png",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Analytics, Cybersecurity",
    img: "/img3.png",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career, Freshers",
    img: "/img4.png",
  },
];

export default function Courses() {
  return (
    <section className="py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Tailored{" "}
        <span className="text-blue-600">Course Segmentation</span>
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-gray-600">
        Explore{" "}
        <span className="text-blue-600">
          Custom-fit Courses
        </span>
      </p>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden transition hover:shadow-md"
          >
            {/* IMAGE (FULL COVER FIX) */}
            <div className="relative w-full h-45">
              <Image
                src={c.img}
                alt={c.title}
                fill
                // Changed object-cover to object-contain
                className="object-contain transition duration-300 hover:scale-105"
              />
            </div>

            {/* TEXT */}
            <div className="p-4">
              <h3 className="text-blue-600 font-semibold text-lg">
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}