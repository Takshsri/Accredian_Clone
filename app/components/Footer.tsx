"use client";

import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#eef2f7] px-6 py-12">
      
      {/* TOP */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            accredian
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            credentials that matter
          </p>

          <div className="flex gap-4 mt-6 text-gray-600">
            <FaFacebook className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>

        {/* RIGHT CTA + FORM */}
        <div className="w-full md:w-[320px]">
          <button className="bg-blue-600 text-white w-full px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Enquire Now
          </button>

          <p className="text-gray-600 mt-2 text-sm">
            Speak with our Advisor
          </p>

          {/* FORM */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = {
                name: (e.target as any).name.value,
                email: (e.target as any).email.value,
              };

              await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
              });

              alert("Submitted successfully!");
            }}
            className="mt-4 space-y-3"
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded border"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded border"
            />

            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t my-10 max-w-6xl mx-auto"></div>

      {/* MIDDLE */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Accredian
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>About</li>
            <li>Blog</li>
            <li>Why Accredian</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact Us
          </h3>

          <p className="text-gray-600">
            Email us:{" "}
            <span className="text-blue-600">
              enterprise@accredian.com
            </span>
          </p>

          <p className="text-gray-600 mt-3">
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, 
            Sector 18, Gurugram, Haryana
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t mt-10 pt-6 text-center text-gray-600 text-sm">
        © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
}